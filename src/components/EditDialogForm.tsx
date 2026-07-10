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
                className="flex flex-col max-w-lg space-y-4 bg-white p-12 rounded-lg"
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
                  <button onClick={() => setIsOpenEdit(false)}>Cancel</button>
                  <button onClick={() => setIsOpenEdit(false)}>
                    Desactivate
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
