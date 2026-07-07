import { Button } from "@headlessui/react";
import { Plus, Trash2 } from "lucide-react";

export default function TopButtons() {
  return (
    <div className="font-semibold flex justify-between items-center">
      <Button className="flex justify-center items-center bg-sky-500 hover:bg-sky-600 text-white rounded-md p-2 cursor-pointer gap-2">
        Crear usuario <Plus />
      </Button>

      <Button className="flex justify-center items-center bg-rose-500 hover:bg-rose-600 text-white rounded-md p-2 cursor-pointer gap-2">
        Eliminar todo <Trash2 />
      </Button>
    </div>
  );
}
