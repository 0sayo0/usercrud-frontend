import { useEffect } from "react";

import { useUserStore } from "../store/useUserStore";

import UserCard from "./UserCard";

export default function UserList() {
  const { users, isLoading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <ul className="grid md:grid-cols-2 justify-center items-center gap-40">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </ul>
    </>
  );
}
