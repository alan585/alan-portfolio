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

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } =
          currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 10;
        const y = -(clientY - top - height / 2) / 10;

        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
    >
      <li className="flex h-[260px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] bg-opacity-40 px-10 py-6 hover:shadow-xl lg:items-start">
        <span className="text-accent">{date}</span>
        <h3 className="min-h-[40px] max-w-[320px] text-center text-xl lg:text-left">
          {title}
        </h3>
        <h3 className="min-h-[60px] max-w-[300px] text-center text-xl lg:text-left">
          {subtitle}
        </h3>
        <div className="flex items-center gap-3">
          {/* dot */}
          <span className="h-[6px] w-[6px] rounded-full bg-accent"></span>
          <p className="text-white/60">{description}</p>
        </div>
      </li>
    </motion.div>
  );
};

export default Card;
