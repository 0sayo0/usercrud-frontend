import { useUserStore } from "../features/users/store/useUserStore";
import {
  Button,
  Dialog,
  DialogPanel,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../features/users/schemas/userSchema";
import type { CreateUserFormData } from "../features/users/schemas/userSchema";

type CreateDialogFormProps = {
  isOpenCreate: boolean;
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateDialogForm({
  isOpenCreate,
  setIsOpenCreate,
}: CreateDialogFormProps) {
  const { toCreateUser } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmitForm = (data: CreateUserFormData) => {
    console.log("Datos válidos enviados:", data);
    toCreateUser(data);
    reset();
    setIsOpenCreate(false);
  };

  const cancelCreateUser = () => {
    reset();
    setIsOpenCreate(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpenCreate && (
          <Dialog
            static
            open={isOpenCreate}
            onClose={() => cancelCreateUser()}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col max-w-lg space-y-4 bg-white p-12 rounded-lg"
              >
                <form
                  noValidate
                  onSubmit={handleSubmit(onSubmitForm)}
                  className="flex flex-row gap-14"
                >
                  <Fieldset className="grid">
                    <Legend className="text-xl font-bold text-pink-700 mb-6">
                      Crea un usuario
                    </Legend>
                    <div>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          Nombre:
                        </Label>
                        <Input
                          {...register("name")}
                          type="text"
                          placeholder="Nombre del usuario"
                          className="mt-1 block"
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
                          className="mt-1 block"
                          // name="age"
                        />
                        {/* Mensaje de error dinámico */}
                        {errors.age && (
                          <span className="text-red-500 text-sm">
                            {errors.age.message}
                          </span>
                        )}
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          E-mail:
                        </Label>
                        <Input
                          type="email"
                          {...register("email")}
                          placeholder="Ej. luna@example.com"
                          className="mt-1 block"
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
                          className="mt-1 block"
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
                    <Button onClick={() => cancelCreateUser()}>Cancel</Button>
                    <Button type="submit" disabled={isSubmitting}>
                      Crear
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
