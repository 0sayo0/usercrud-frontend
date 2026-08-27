import { Button } from "@headlessui/react";
import { Delete, Edit } from "lucide-react";
import type { User } from "../types/user.types";

type UserCardBtnsProps = {
  user: User;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserCardBtns({
  // user,
  setIsOpenEdit,
}: UserCardBtnsProps) {
  return (
    <>
      <Button
        onClick={() => setIsOpenEdit(true)}
        title="Editar usuario"
        className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-md p-1 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
      >
        Editar <Edit />
      </Button>

      <Button
        title="Eliminar usuario?"
        className="flex justify-center items-center bg-rose-500 hover:bg-rose-600 text-white rounded-md p-1 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
      >
        Eliminar <Delete />
      </Button>
    </>
  );
}
