import {
  Dialog,
  DialogPanel,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { User } from "../features/users/types/user.types";
import { useUserStore } from "../features/users/store/useUserStore";
import { useEffect } from "react";
import {
  updateUserSchema,
  type UpdateUserFormData,
} from "../features/users/schemas/userSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type EditDialogFormProps = {
  user: User;
  isOpenEdit: boolean;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export function EditDialogForm({
  user,
  isOpenEdit,
  setIsOpenEdit,
}: EditDialogFormProps) {
  const { toUpdateUser } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    if (isOpenEdit) {
      reset({
        name: user.name,
        age: user.age,
        email: user.email,
        role: user.role,
      });
    }
  }, [isOpenEdit, user, reset]);

  const onSubmitUpdateUser = (data: UpdateUserFormData, _id: string) => {
    console.log("Datos válidos enviados:", data);
    toUpdateUser(data, _id);
    reset();
    setIsOpenEdit(false);
  };

  const cancelUpdateUser = () => {
    reset();
    setIsOpenEdit(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpenEdit && (
          <Dialog
            static
            open={isOpenEdit}
            onClose={() => setIsOpenEdit(false)}
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
                className="flex flex-col max-w-xl w-full space-y-4 bg-white p-12 rounded-lg"
              >
                <form
                  className="flex flex-col gap-14"
                  onSubmit={handleSubmit((data) =>
                    onSubmitUpdateUser(data, user._id),
                  )}
                >
                  <Fieldset className="grid">
                    <Legend className="text-xl font-bold text-pink-700 mb-6">
                      Edicion de {user.name}
                    </Legend>
                    <div>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          Nombre:
                        </Label>
                        <Input
                          {...register("name")}
                          type="text"
                          // value={user.name}
                          placeholder="Nuevo nombre del usuario"
                          className="mt-1 block w-full"
                          name="name"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Edad:</Label>
                        <Input
                          {...register("age", { valueAsNumber: true })}
                          type="number"
                          // value={user.age}
                          placeholder="Nueva edad del usuario"
                          className="mt-1 block w-full"
                          name="age"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          E-mail:
                        </Label>
                        <Input
                          {...register("email")}
                          type="email"
                          // value={user.email}
                          placeholder="Ej. stephany@example.com"
                          className="mt-1 block w-full"
                          name="email"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Role</Label>
                        <Input
                          {...register("role")}
                          type="text"
                          // value={user.role}
                          placeholder="Nuevo role del usuario"
                          className="mt-1 block w-full"
                          name="role"
                        />
                      </Field>
                    </div>
                  </Fieldset>

                  <div className="flex gap-4">
                    <button
                      className="flex justify-center items-center bg-gray-500 hover:bg-gray-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
                      onClick={() => cancelUpdateUser()}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Actualizar
                    </button>
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
