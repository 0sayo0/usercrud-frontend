import { api } from "../../../api/axiosInstance";
import type { User, UserBody, UserBodyUpdate } from "../types/user.types";

export const userService = {
  getAllUsers: async () => {
    const response = await api.get<{ success: true; data: User[] }>("/");
    return response.data;
  },
  createUser: async (
    data: UserBody,
  ): Promise<{ success: true; data: User }> => {
    const response = await api.post<{ success: true; data: User }>("/", data);
    console.log(response.data);
    return response.data;
  },
  updateUser: async (
    data: UserBodyUpdate,
  ): Promise<{ success: true; data: User }> => {
    const response = await api.put<{ success: true; data: User }>(
      `/${data._id}`,
      data,
    );
    return response.data;
  },
};
