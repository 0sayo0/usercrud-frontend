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

type CreateDialogFormProps = {
  isOpenCreate: boolean;
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateDialogForm({
  isOpenCreate,
  setIsOpenCreate,
}: CreateDialogFormProps) {
  return (
    <>
      <AnimatePresence>
        {isOpenCreate && (
          <Dialog
            static
            open={isOpenCreate}
            onClose={() => setIsOpenCreate(false)}
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
                      Crea un usuario
                    </Legend>
                    <div>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          Nombre:
                        </Label>
                        <Input
                          placeholder="Nombre del usuario"
                          className="mt-1 block"
                          name="name"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Edad:</Label>
                        <Input
                          placeholder="Edad del usuario"
                          className="mt-1 block"
                          name="age"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">
                          E-mail:
                        </Label>
                        <Input
                          placeholder="Ej. luna@example.com"
                          className="mt-1 block"
                          name="email"
                        />
                      </Field>
                      <Field className="space-y-4">
                        <Label className="font-bold text-sky-700">Role:</Label>
                        <Input
                          placeholder="Role del nuevo usuario"
                          className="mt-1 block"
                          name="email"
                        />
                      </Field>
                    </div>
                  </Fieldset>
                </form>

                <div className="flex gap-4">
                  <button onClick={() => setIsOpenCreate(false)}>Cancel</button>
                  <button onClick={() => setIsOpenCreate(false)}>Crear</button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
