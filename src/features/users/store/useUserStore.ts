import { create } from "zustand";
import { userService } from "../services/userService";
import type { UpdateUserBody, User, UserBody } from "../types/user.types";

type UserState = {
  users: User[];
  isLoading: boolean;
  isSubmitting: boolean;
  toFetchUsers: () => Promise<void>;
  toCreateUser: (data: UserBody) => Promise<void>;
  toUpdateUser: (data: UpdateUserBody, _id: string) => Promise<void>;
  toDeleteUser: (data: User) => Promise<void>;
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
      // console.log("usuarios actualizados:", get().users);
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

  toUpdateUser: async (data, _id) => {
    set({ isSubmitting: true });

    try {
      const response = await userService.updateUser(data, _id);
      if (response.success) {
        set((state) => ({
          users: state.users.map((user) =>
            user._id === response.data._id ? response.data : user,
          ),
        }));
      }
    } catch (error) {
      console.error("Error al actualizar usuario en el store: ", error);
    } finally {
      set({ isSubmitting: false });
    }
  },

  toDeleteUser: async (data) => {
    try {
      const response = await userService.deleteUser(data);
      if (response.success) {
        set((state) => ({
          users: state.users.filter((user) => user._id !== data._id),
        }));
      }
    } catch (error) {
      console.error("Error al deliminar el usuario", error);
    }
  },
}));
