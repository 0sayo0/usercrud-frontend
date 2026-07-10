// import { useUserStore } from "../features/users/store/useUserStore";
import { Button } from "@headlessui/react";
import { Plus, Trash2 } from "lucide-react";

type TopBtnsProps = {
  setIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TopBtns({ setIsOpenCreate }: TopBtnsProps) {
  // const { toCreateUser } = useUserStore();

  // const data = {
  //   name: "Duri Morales",
  //   age: 10,
  //   email: "duri@example.com",
  // };

  return (
    <div className="font-semibold flex justify-between items-center">
      <Button
        onClick={() => setIsOpenCreate(true)} // toCreateUser(data)
        className="flex justify-center items-center bg-sky-500 hover:bg-sky-600 text-white rounded-md p-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all"
      >
        Crear usuario <Plus />
      </Button>

      <Button className="flex justify-center items-center bg-rose-500 hover:bg-rose-600 text-white rounded-md p-2 cursor-pointer gap-2 hover:-translate-y-0.5 transition-all">
        Eliminar todo <Trash2 />
      </Button>
    </div>
  );
}
