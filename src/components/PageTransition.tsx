"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      {children}
      <motion.div
        key={pathName}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 1.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
      />
    </AnimatePresence>
  );
};

export default PageTransition;
