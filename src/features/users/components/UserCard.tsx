import { useState } from "react";
import UserCardBtns from "./UserCardBtns";
import { DetailsDialog } from "../../../components/DetailsDialog";

import { motion } from "framer-motion";

import type { User } from "../types/user.types";
import { EditDialogForm } from "../../../components/EditDialogForm";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  // const [delet?]

  return (
    <>
      <motion.li
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-4 text-center space-y-6 max-w-100 max-h-52"
      >
        <div
          onClick={() => setIsOpenDetails(true)}
          className="flex flex-col gap-6 cursor-pointer"
          title={`Ver detalles de ${user.name}`}
        >
          <h2 className="font-bold text-xl text-pink-700">{user.name}</h2>
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-bold text-sky-700">
              Edad:{" "}
              <span className="font-normal text-gray-600">{user.age}</span>
            </p>
            <p className="font-bold text-sky-700">
              Email:{" "}
              <span className="font-normal text-gray-600">{user.email}</span>
            </p>
            <p className="font-bold text-sky-700">
              Role:{" "}
              <span className="font-normal text-gray-600">{user.role}</span>
            </p>
          </div>
        </div>

        {/* Buttons zone */}
        <div className="flex justify-between items-center text-sm w-full">
          <UserCardBtns user={user} setIsOpenEdit={setIsOpenEdit} />
        </div>
      </motion.li>
      <DetailsDialog
        user={user}
        isOpenDetails={isOpenDetails}
        setIsOpenDetails={setIsOpenDetails}
      />
      <EditDialogForm
        user={user}
        isOpenEdit={isOpenEdit}
        setIsOpenEdit={setIsOpenEdit}
      />
    </>
  );
}
