"use client";

import { motion } from "framer-motion";
import { JSX, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SkillCard = ({ icon, name }: { icon: JSX.Element; name: string }) => {
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
      whileHover={{ scale: 1.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 120, damping: 8 }}
      className="perspective-1000"
    >
      <li>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329] bg-opacity-50 hover:shadow-xl">
              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                {icon}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </li>
    </motion.div>
  );
};

export default SkillCard;
