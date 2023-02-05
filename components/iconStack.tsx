import React, { ReactElement } from "react";
import IconStyling from "./IconStyling";

interface Props {
  title: string;
  icon: ReactElement;
}

const IconStack = ({ title, icon }: Props) => {
  return (
    <div className="w-[30%] shadow-inner shadow-blue-300 md:px-4 py-8 flex justify-center items-center flex-col rounded-3xl hover:scale-105 transition ease-in duration-300">
      <IconStyling icon={icon} className="mb-2 md:mb-4" />
      <h3 className="text-gray-400 font-semibold text-lg md:text-2xl">
        {/* stack name goes here */}
        {title}
      </h3>
    </div>
  );
};

export default IconStack;
