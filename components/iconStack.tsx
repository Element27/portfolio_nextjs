import React, { ReactElement } from "react";
import { IconAdobephotoshop } from "./Icons";

interface Props {
  title: string;
  icon: ReactElement;
}

const IconStack = ({ title, icon }: Props) => {
  return (
    <div className="w-[45%] md:w-[30%] border border-blue-400 px-4 py-8 flex justify-center items-center flex-col rounded-3xl">
      <div className="text-7xl mb-4">
        {/* Icon goes here */}
        {icon}
        {/* <IconAdobephotoshop className={`${color} text-7xl`} /> */}
      </div>
      <h3 className="text-gray-400 font-semibold text-2xl">
        {/* stack name goes here */}
        {title}
      </h3>
    </div>
  );
};

export default IconStack;
