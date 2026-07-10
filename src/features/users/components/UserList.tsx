import { useUserStore } from "../store/useUserStore";
import UserCard from "./UserCard";
import { useEffect } from "react";

export default function UserList() {
  const { users, isLoading, toFetchUsers } = useUserStore();

  useEffect(() => {
    toFetchUsers();
  }, [toFetchUsers]);

  if (isLoading) return <p>Cargando...</p>;

  return (
    <>
      <ul className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-20">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </ul>
    </>
  );
}
