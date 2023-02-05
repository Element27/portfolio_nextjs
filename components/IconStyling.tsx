import React, { ReactElement } from "react";

interface IconProp {
  icon: ReactElement;
  className?: String;
}

const IconStyling = ({ icon, className }: IconProp) => {
  return (
    <div className={`${className} text-5xl md:text-7xl`}>
      {/* Icon goes here */}
      {icon}
      {/* <IconAdobephotoshop className={`${color} text-7xl`} /> */}
    </div>
  );
};

export default IconStyling;
