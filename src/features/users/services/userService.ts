import { isAxiosError } from "axios";
import { api } from "../../../api/axiosInstance";
import type { User } from "../types/user.types";

export const userService = {
  getAllUsers: async () => {
    const response = await api.get<{ success: true; data: User[] }>("/");
    return response.data;
  },
};
