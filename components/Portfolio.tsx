import React from "react";
import PortfolioCard from "./PortfolioCard";
import cobhealth from "./img/cobhealth1.png";
import tiidehr from "./img/tiidehr1.png";
import profilecard from "./img/profilecardmakr.png";
import getly from "./img/Getly.png";

const Portfolio = () => {
  return (
    <div className=" px-4 py-10 bg-gray-100">
      <h2 className="subheading text-gray-900 mb-10">Portfolio</h2>
      <div className="flex flex-wrap flex-col justify-center items-center gap-4 lg:gap-12 lg:flex-row gap-x-4 gap-y-6 w-[90%] mx-auto">
        <PortfolioCard
          img={getly}
          link="https://getly.app"
          stack={["Typescript, tRPC, Tailwind"]}
        />
        <PortfolioCard
          img={tiidehr}
          link="https://tiide-hr.netlify.app/"
          stack={["JavaScript, React,Redux"]}
        />
        <PortfolioCard
          img={cobhealth}
          link="http://cobhealth.netlify.app/"
          stack={["React, Tailwind, Context-Api"]}
        />

        <PortfolioCard
          img={profilecard}
          link="https://profilecardmakr.netlify.app/"
          stack={["React, Tailwind, Git"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
