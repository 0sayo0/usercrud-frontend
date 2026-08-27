import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { User } from "../features/users/types/user.types";

type DetailsDialogProps = {
  user: User;
  isOpenDetails: boolean;
  setIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DetailsDialog({
  user,
  isOpenDetails,
  setIsOpenDetails,
  setIsOpenEdit,
}: DetailsDialogProps) {
  return (
    <>
      <AnimatePresence>
        {isOpenDetails && (
          <Dialog
            static
            open={isOpenDetails}
            onClose={() => setIsOpenDetails(false)}
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
                <DialogTitle className="text-xl font-bold text-pink-700 mb-6">
                  <span className="font-medium text-gray-700">Detalles de</span>{" "}
                  {user.name}
                </DialogTitle>
                <div className="flex gap-14">
                  <div className="space-y-4">
                    <p className="font-bold text-sky-700">
                      Edad:{" "}
                      <span className="font-normal text-gray-600">
                        {user.age}
                      </span>
                    </p>
                    <p className="font-bold text-sky-700">
                      Email:{" "}
                      <span className="font-normal text-gray-600">
                        {user.email}
                      </span>
                    </p>
                    <p className="font-bold text-sky-700">
                      Role:{" "}
                      <span className="font-normal text-gray-600">
                        {user.role}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col justify-evenly items-center w-full space-y-4">
                    <p className="font-bold text-sky-700">
                      Creado:{" "}
                      <span className="font-normal text-gray-600">
                        {user.createdAt}
                      </span>
                    </p>
                    <p className="font-bold text-sky-700">
                      Actualizado:{" "}
                      <span className="font-normal text-gray-600">
                        {user.updatedAt}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex justify-center items-center bg-gray-500 hover:bg-gray-600 text-white rounded-md py-1 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all px-2"
                    onClick={() => setIsOpenDetails(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-1 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all px-2"
                    onClick={() => setIsOpenEdit(true)}
                  >
                    Editar
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
