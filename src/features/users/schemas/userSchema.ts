import * as z from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre es obligatorio." })
    .min(3, { message: "El nombre debe incluir al menos tres letras" }),
  age: z
    .number({ message: "Escribe la edad del usuario." })
    .positive({ message: "La edad debe ser un numero positivo." }),
  email: z
    .email({ message: "Ingresa un correo electrónico válido." })
    .trim()
    .toLowerCase(),
  role: z
    .string({ message: "El rol es obligatorio." })
    .trim()
    .min(1, "El role es obligatorio.")
    .min(3, "El role debe tener minimo tres letras"),
});

export const updateUserSchema = userSchema.partial();

export type CreateUserFormData = z.infer<typeof userSchema>;
export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
