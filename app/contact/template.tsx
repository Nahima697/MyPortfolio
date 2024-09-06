"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        scaleY: 0,
        backgroundColor: "hsl(var(--foreground))", 
      }}
      animate={{
        scaleY: 1,
        backgroundColor: "hsl(var(--background))", 
      }}
      exit={{
        scaleY: 0,
        backgroundColor: "hsl(var(--background))", 
      }}
      transition={{
        ease: "easeInOut",
        duration: 1.2, 
      }}
      style={{
        transformOrigin: "top", 
        minHeight: "100vh", 
      }}
      className="transition-colors duration-1000 ease-in-out" 
    >
      {children}
    </motion.div>
  );
}
