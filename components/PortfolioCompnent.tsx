// import Image from "next/image";
import Image from "next/image";
import React from "react";
import DescAnimation from "./DescAnimation";
import fd from "./img/cobhealth1.png";
import fq from "./img/cobhealth2.png";
import fw from "./img/cobhealth3.png";
import fe from "./img/cobhealth4.png";
import SlideAnimation from "./SlideAnimation";

const PortfolioCompnent = () => {
  const arr = [fd, fq, fw, fe];

  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-4  ">
      {/* should contain a link, a screenshot and a description  */}
      <SlideAnimation images={arr} />
      <DescAnimation />
    </div>
  );
};

export default PortfolioCompnent;
