import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface UserData {
  user_id: string | number | null;
  username: string | null;
}

interface AuthStore {
  allUserData: UserData | null;
  loading: boolean;

  user: () => UserData;
  setUser: (user: UserData | null) => void;
  setLoading: (loading: boolean) => void;
  isLoggedIn: () => boolean;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  allUserData: null,
  loading: false,

  user: () => ({
    user_id: get().allUserData?.user_id ?? null,
    username: get().allUserData?.username ?? null,
  }),

  setUser: (user) => set({ allUserData: user }),
  setLoading: (loading) => set({ loading }),
  isLoggedIn: () => get().allUserData !== null,
}));

if (import.meta.env.DEV) {
  mountStoreDevtool("Store", useAuthStore);
}

export { useAuthStore };
