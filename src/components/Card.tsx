"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({
  date,
  title,
  subtitle,
  description,
}: {
  date: string;
  title: string;
  subtitle: string;
  description: string;
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left - width / 2) / width) * 25; // Adjust intensity
    const y = -((clientY - top - height / 2) / height) * 25;

    setTilt({ x, y });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 120, damping: 8 }}
    >
      <li className="flex h-[240px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] bg-opacity-40 px-10 py-6 hover:shadow-xl lg:items-start">
        <span className="text-accent">{date}</span>
        <h3 className="min-h-[30px] max-w-[320px] text-center text-lg lg:text-left">
          {title}
        </h3>
        <h3 className="min-h-[50px] max-w-[300px] text-center text-lg lg:text-left">
          {subtitle}
        </h3>
        <div className="flex items-center gap-3">
          {/* dot */}
          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </li>
    </motion.div>
  );
};

export default Card;
