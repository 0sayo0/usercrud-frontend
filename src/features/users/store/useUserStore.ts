import { create } from "zustand";
import { userService } from "../services/userService";
import type { User } from "../types/user.types";

type UserState = {
  users: User[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  isLoading: false,
  fetchUsers: async () => {
    set({ isLoading: true });

    try {
      const response = await userService.getAllUsers();
      if (response.success) {
        set({ users: response.data });
      }
    } catch (error) {
      console.error("Error al traer usuarios al store: ", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
