import { create } from "zustand";
import { userService } from "../services/userService";
import type { User, UserBody } from "../types/user.types";

type UserState = {
  users: User[];
  isLoading: boolean;
  isSubmitting: boolean;
  toFetchUsers: () => Promise<void>;
  toCreateUser: (data: UserBody) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  isLoading: false,
  isSubmitting: false,

  toFetchUsers: async () => {
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

  toCreateUser: async (data) => {
    set({ isSubmitting: true });

    try {
      const response = await userService.createUser(data);
      if (response.success) {
        set((state) => ({
          users: [...state.users, response.data],
        }));
      }
    } catch (error) {
      console.error("Error al crear usuario en el store: ", error);
    } finally {
      set({ isSubmitting: false });
    }
  },
}));
