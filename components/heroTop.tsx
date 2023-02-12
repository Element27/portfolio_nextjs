import Image from "next/image";
import React from "react";
import d_tp from "./img/dell.jpg";

import { motion } from "framer-motion";

const HeroTop = () => {
  return (
    <div className="bg-first-bg w-full h-screen bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-black/80 flex justify-center items-center gap-8 text-gray-300 flex-col lg:flex-row px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
          className="w-fit lg:w-auto mx-auto lg:mx-0"
        >
          {/* // nmae and what i do go here */}
          <h2 className="text-5xl font-bold md:text-7xl">
            Daniel <span className="text-[#dc3956]">Akinbo</span>
          </h2>
          <h3 className="text-base font-semibold md:font-normal md:text-lg">
            Frontend Developer, Technical Writer, Graphics Designer
          </h3>
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          {/* dp image goes here */}
          <Image src={d_tp} alt="" className="w-52 h-52 md:w-64 md:h-64" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTop;
