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
  // const { toUpdateUser } = useUserStore();

  // const onSubmitUpdateUser = (data) => {
  //   console.log("Datos válidos enviados:", data);
  // };

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
                <form className="flex flex-row gap-14">
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
                          value={user.name}
                          placeholder="Nuevo nombre del usuario"
                          className="mt-1 block"
                          name="name"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Edad:</Label>
                        <Input
                          value={user.age}
                          placeholder="Nueva edad del usuario"
                          className="mt-1 block"
                          name="age"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          E-mail:
                        </Label>
                        <Input
                          value={user.email}
                          placeholder="Ej. stephany@example.com"
                          className="mt-1 block"
                          name="email"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Role</Label>
                        <Input
                          value={user.role}
                          placeholder="Nuevo role del usuario"
                          className="mt-1 block"
                          name="role"
                        />
                      </Field>
                    </div>
                  </Fieldset>
                </form>

                <div className="flex gap-4">
                  <button
                    className="flex justify-center items-center bg-gray-500 hover:bg-gray-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
                    onClick={() => setIsOpenEdit(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-1 px-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
                    onClick={() => setIsOpenEdit(false)}
                  >
                    Actualizar
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
