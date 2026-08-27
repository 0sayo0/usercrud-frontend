import {
  Fieldset,
  Legend,
  Field,
  Label,
  Input,
  Button,
} from "@headlessui/react";
import type {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

type CreateFormProps = {
  register: UseFormRegister<{
    name: string;
    age: number;
    email: string;
    role: string;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      name: string;
      age: number;
      email: string;
      role: string;
    },
    {
      name: string;
      age: number;
      email: string;
      role: string;
    }
  >;
  errors: FieldErrors<{
    name: string;
    age: number;
    email: string;
    role: string;
  }>;
  isSubmitting: boolean;
  onSubmitForm: (data: {
    name: string;
    age: number;
    email: string;
    role: string;
  }) => void;
  cancelCreateUser: () => void;
};

export default function CreateForm({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmitForm,
  cancelCreateUser,
}: CreateFormProps) {
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex flex-col gap-4"
    >
      <Fieldset className="grid">
        <Legend className="text-xl font-bold text-pink-700 mb-6">
          Crea un usuario
        </Legend>
        <div>
          <Field className="space-y-4">
            <Label className="font-bold text-sky-700">Nombre:</Label>
            <Input
              {...register("name")}
              type="text"
              placeholder="Nombre del usuario"
              className="mt-1 block w-full"
              // name="name"
            />
            {/* Mensaje de error dinámico */}
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </Field>
          <Field className="space-y-4">
            <Label className="font-bold text-sky-700">Edad:</Label>
            <Input
              {...register("age", { valueAsNumber: true })}
              type="number"
              placeholder="Edad del usuario"
              className="mt-1 block w-full"
              // name="age"
            />
            {/* Mensaje de error dinámico */}
            {errors.age && (
              <span className="text-red-500 text-sm">{errors.age.message}</span>
            )}
          </Field>
          <Field className="space-y-4">
            <Label className="font-bold text-sky-700">E-mail:</Label>
            <Input
              type="email"
              {...register("email")}
              placeholder="Ej. luna@example.com"
              className="mt-1 block w-full"
              // name="email"
            />
            {/* Mensaje de error dinámico */}
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </Field>
          <Field className="space-y-4">
            <Label className="font-bold text-sky-700">Role:</Label>
            <Input
              {...register("role")}
              type="text"
              placeholder="Role del nuevo usuario"
              className="mt-1 block w-full"
              // name="role"
            />
            {/* Mensaje de error dinámico */}
            {errors.role && (
              <span className="text-red-500 text-sm">
                {errors.role.message}
              </span>
            )}
          </Field>
        </div>
      </Fieldset>

      <div className="flex gap-4">
        <Button
          className="flex justify-center items-center bg-gray-500 hover:bg-gray-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
          onClick={() => cancelCreateUser()}
        >
          Cancel
        </Button>
        <Button
          className="flex justify-center items-center bg-sky-500 hover:bg-sky-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
          type="submit"
          disabled={isSubmitting}
        >
          Crear
        </Button>
      </div>
    </form>
  );
}
