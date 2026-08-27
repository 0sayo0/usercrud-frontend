export type User = {
  _id: string;
  name: string;
  age: number;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type UserBody = Omit<User, "_id" | "createdAt" | "updatedAt">;

export type UserBodyUpdate = Omit<User, "createdAt" | "updatedAt">;
