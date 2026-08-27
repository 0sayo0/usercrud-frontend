import { api } from "../../../api/axiosInstance";
import type { UpdateUserBody, User, UserBody } from "../types/user.types";

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
    data: UpdateUserBody,
    _id: String,
  ): Promise<{ success: true; data: User }> => {
    const response = await api.put<{ success: true; data: User }>(
      `/${_id}`,
      data,
    );
    return response.data;
  },
};
