import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { isAccessTokenExpired, setAuthUser, getRefreshToken } from "./auth";
import { BASE_URL } from "./constant";

interface RefreshTokenResponse {
  access: string;
  refresh: string;
  [key: string]: any;
}

const useAxios = async (): Promise<AxiosInstance> => {
  const access_token = Cookies.get("access_token") || "";
  const refresh_token = Cookies.get("refresh_token") || "";

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${access_token}` }
  });

  axiosInstance.interceptors.request.use(
    async (req: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      if (!isAccessTokenExpired(access_token)) {
        return req;
      }

      const response: RefreshTokenResponse = await getRefreshToken(refresh_token);
      setAuthUser(response.access, response.refresh);

      req.headers.Authorization = `Bearer ${response.access}`;

      return req;
    }
  );

  return axiosInstance;
};

export default useAxios;