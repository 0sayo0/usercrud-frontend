import { useUserStore } from "../features/users/store/useUserStore";
import { Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../features/users/schemas/userSchema";
import type { CreateUserFormData } from "../features/users/schemas/userSchema";
import CreateForm from "./CreateForm";

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
                className="flex flex-col max-w-xl w-full space-y-4 bg-white p-12 rounded-lg"
              >
                <CreateForm
                  register={register}
                  handleSubmit={handleSubmit}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  onSubmitForm={onSubmitForm}
                  cancelCreateUser={cancelCreateUser}
                />
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
