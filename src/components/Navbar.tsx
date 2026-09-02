import { useState, useEffect } from "react";
import { Input, Field, Label } from "@headlessui/react";
import { Search } from "lucide-react";
import { useUserStore } from "../features/users/store/useUserStore";
import UserSearchMenu from "../features/users/components/UserSearchMenu";

export default function Navbar() {
  // Zustand State
  const { users, toFetchUsers } = useUserStore();

  // React States
  const [search, setSearch] = useState("");
  const [showFoundUsers, setShowFounUsers] = useState([]);

  useEffect(() => {
    toFetchUsers();
  }, [toFetchUsers]);

  const searchingForUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const normalizedSearching = search.trim().toLowerCase();

  const foundUsers = normalizedSearching
    ? users.filter((user) =>
        user.name.toLowerCase().startsWith(normalizedSearching),
      )
    : [];

  // console.log(foundUsers);

  return (
    <>
      <nav className="flex justify-center items-center text-white bg-gray-600 py-6">
        <Field className="flex justify-center items-center gap-2">
          <Label>
            <Search name="search_user" size={28} />
            <span className="sr-only">Buscar usuario</span>
          </Label>
          <div className="relative w-xs">
            <Input
              name="search_user"
              type="text"
              placeholder="Buscar usuario"
              className="bg-transparent rounded-md border-2 p-1 transition data-focus:outline-none data-focus:border-sky-500 w-xs"
              onChange={searchingForUser}
            />
            {normalizedSearching && <UserSearchMenu foundUsers={foundUsers} />}
          </div>
        </Field>
      </nav>
    </>
  );
}
