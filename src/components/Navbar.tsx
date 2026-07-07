import { Input, Field, Label } from "@headlessui/react";

import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center items-center text-white bg-gray-600 py-6">
        <Field className="flex justify-center items-center gap-2">
          <Label>
            <Search name="search_user" size={28} />
            <span className="sr-only">Buscar usuario</span>
          </Label>
          <Input
            name="search_user"
            type="text"
            placeholder="Buscar usuario"
            className="bg-transparent rounded-md border-2 p-1 transition data-focus:outline-none data-focus:border-sky-500 w-xs"
            // onChange={}
          />
        </Field>
      </nav>
    </>
  );
}
