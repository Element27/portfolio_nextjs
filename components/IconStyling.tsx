import React, { ReactElement } from "react";
import { motion } from "framer-motion";

interface IconProp {
  icon: ReactElement;
  className?: String;
}

const IconStyling = ({ icon, className }: IconProp) => {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ type: "spring" }}
      className={`${className} text-5xl md:text-7xl`}
    >
      {/* Icon goes here */}
      {icon}
      {/* <IconAdobephotoshop className={`${color} text-7xl`} /> */}
    </motion.div>
  );
};

export default IconStyling;
