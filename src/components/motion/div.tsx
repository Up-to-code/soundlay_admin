"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface children {
  children: ReactNode;
}

export default function Divmotion({ children }: children) {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
