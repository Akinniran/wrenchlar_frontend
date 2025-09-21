import { useAuthStore } from "../store/auth";
import axios from "./axios";
import { jwtDecode } from 'jwt-decode';
import Cookies from "js-cookie";
// import Swal from 'sweetalert2';

// const Toast = Swal.mixin({
//     toast: true,
//     position: "top",
//     showConfirmButton: false,
//     timer: 1500,
//     timerProgressBar: true
// });

interface UserData {
  user_id: string | number | null;
  username: string | null;
}

interface LoginResponse {
    access: string;
    refresh: string;
    [key: string]: any;
}

interface RegisterResponse {
    [key: string]: any;
}

interface AuthResult<T> {
    data: T | null;
    error: string | null;
}

export const login = async (
    email: string,
    password: string
): Promise<AuthResult<LoginResponse>> => {
    try {
        const { data, status } = await axios.post<LoginResponse>("user/token/", {
            email,
            password,
        });

        if (status === 200) {
            setAuthUser(data.access, data.refresh);

            // Toast.fire({
            //     icon: "success",
            //     title: "Login Successful"
            // });
        }
        return { data, error: null };
    } catch (error: any) {
        return {
            data: null,
            error: error?.response?.data?.detail || 'Something went wrong'
        };
    }
};

export const register = async (
    full_name: string,
    email: string,
    phone: string,
    password: string,
    password2: string
): Promise<AuthResult<RegisterResponse>> => {
    try {
        const { data } = await axios.post<RegisterResponse>('user/register/', {
            full_name,
            email,
            phone,
            password,
            password2
        });

        await login(email, password);

        // Toast.fire({
        //     icon: "success",
        //     title: "Account Created Successfully"
        // });

        return { data, error: null };
    } catch (error: any) {
        console.log(error?.response?.data);
        return {
            data: null,
            error: error?.response?.data?.detail || 'Something went wrong'
        };
    }
};

export const logout = (): void => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    useAuthStore.getState().setUser(null);
};

export const setUser = async (): Promise<void> => {
    const accessToken = Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");

    if (!accessToken || !refreshToken) {
        return;
    }

    if (isAccessTokenExpired(accessToken)) {
        const response = await getRefreshToken();
        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(accessToken, refreshToken);
    }
};

export const setAuthUser = (
    access_token: string,
    refresh_token: string
): void => {
    Cookies.set('access_token', access_token, {
        expires: 1,
        secure: true
    });

    Cookies.set('refresh_token', refresh_token, {
        expires: 1,
        secure: true
    });

    const user = jwtDecode<UserData>(access_token) ?? null;

    if (user) {
        useAuthStore.getState().setUser(user);
    }

    useAuthStore.getState().setLoading(false);
};

export const getRefreshToken = async (refreshToken?: string): Promise<LoginResponse> => {
    const refresh_token = refreshToken || Cookies.get("refresh_token");
    const response = await axios.post<LoginResponse>("user/token/refresh/", {
        refresh: refresh_token
    });

    return response.data;
};

export const isAccessTokenExpired = (accessToken: string): boolean => {
    try {
        const decodedToken: { exp: number } = jwtDecode(accessToken);
        return decodedToken.exp < Date.now() / 1000;
    } catch (error) {
        console.log(error);
        return true;
    }
};