"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface children {
  children: ReactNode;
}

export default function Text({ children }: children) {
  return (
    <div className="relative ">
      <motion.div
        className="absolute top-0 z-20 w-full h-full bg-primary"
        initial={{
         width : "100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          width: 0,
        }}
        transition={{ duration: 0.5 }}
      >t
        {children}
      </motion.div>
    </div>
  );
}
