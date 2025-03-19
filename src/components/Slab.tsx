import { motion } from "framer-motion";

// variants
const slabAnimation = {
  initial: {
    bottom: "0%",
  },
  animate: {
    bottom: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const Slab = () => {
  return (
    <>
      <motion.div
        variants={slabAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0,
        }}
        className="relative h-full w-full bg-accent-hover"
      />
    </>
  );
};

export default Slab;
