import { useUserStore } from "../store/useUserStore";
import UserCard from "./UserCard";
import { useEffect } from "react";

import { motion, type Variants } from "motion/react";

export default function UserList() {
  const { users, isLoading, toFetchUsers } = useUserStore();

  useEffect(() => {
    toFetchUsers();
  }, [toFetchUsers]);

  const dotVariants: Variants = {
    jump: {
      transform: "translateY(-30px)",
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  console.log(users);

  if (isLoading)
    return (
      <motion.div
        animate="jump"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="flex justify-center items-center gap-2.5"
      >
        <motion.div
          className="w-5 h-5 rounded-full bg-emerald-500 will-change-transform"
          variants={dotVariants}
        />
        <motion.div
          className="w-5 h-5 rounded-full bg-emerald-500 will-change-transform"
          variants={dotVariants}
        />
        <motion.div
          className="w-5 h-5 rounded-full bg-emerald-500 will-change-transform"
          variants={dotVariants}
        />
      </motion.div>
    );

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
