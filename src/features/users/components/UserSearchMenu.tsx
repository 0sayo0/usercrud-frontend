import { User2 } from "lucide-react";
import type { User } from "../types/user.types";

type UserSearchMenuProps = {
  foundUsers: User[];
};

export default function UserSearchMenu({ foundUsers }: UserSearchMenuProps) {
  return (
    <div className="absolute top-full left-0 z-50 mt-2 w-full overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-800 shadow-xl ">
      <div className="border-b border-gray-200 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Usuarios encontrados
        </span>
      </div>

      {foundUsers.length === 0 ? (
        <p className="text-center text-md text-gray-500 mt-4 mb-2">
          No hay coincidencias
        </p>
      ) : (
        foundUsers.map((user) => (
          <div className="max-h-72 overflow-y-auto">
            <button
              type="button"
              className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-gray-100"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                <User2 />
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium">{user.name}</p>
                <p className="truncate text-sm text-gray-500">{user.email}</p>
              </div>
            </button>
          </div>
        ))
      )}
    </div>
  );
}
