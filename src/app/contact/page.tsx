"use client";

import { Button } from "@/components/ui/button";
import { info } from "@/constants";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
      }}
      className="py-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-[30px] align-middle">
          <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
          <p className="w-1/3 text-center text-white/60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil
            sapiente pariatur id totam.
          </p>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <Button className="flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:h-[72px] xl:w-[72px]">
                      {item.icon}
                    </Button>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
