import type { User } from "../types/user.types";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <>
      <li className="block bg-white shadow-lg rounded-md p-4 text-center space-y-6 max-h-56">
        <h2 className="font-bold text-xl text-pink-900">{user.name}</h2>
        <div className="flex justify-evenly items-center gap-6">
          <p className="font-bold text-sky-700">
            Email:{" "}
            <span className="font-normal text-gray-600">{user.email}</span>
          </p>
          <p className="font-bold text-sky-700">
            Edad: <span className="font-normal text-gray-600">{user.age}</span>
          </p>
        </div>
        <div className="flex justify-evenly items-center">
          <p className="font-bold text-sky-700">
            Creado:{" "}
            <span className="font-normal text-gray-600">{user.createdAt}</span>
          </p>
          <p className="font-bold text-sky-700">
            Actualizado:{" "}
            <span className="font-normal text-gray-600">{user.updatedAt}</span>
          </p>
        </div>

        {/* Buttons zone */}
        <div className="flex justify-between items-center"></div>
      </li>
    </>
  );
}
