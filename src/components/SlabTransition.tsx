"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// components
import Slab from "./Slab";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
            <Slab />
          </div>

          <motion.div
            className="pointer-events-none fixed top-0 h-screen w-screen bg-primary"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
