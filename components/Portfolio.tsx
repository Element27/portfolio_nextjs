import React from "react";
import PortfolioCard from "./PortfolioCard";
import cobhealth from "./img/cobhealth1.png";
import tiidehr from "./img/tiidehr1.png";
import profilecard from "./img/profilecardmakr.png";

const Portfolio = () => {
  return (
    <div className=" px-4 py-10 bg-gray-100">
      <h2 className="subheading text-gray-900 mb-10">Portfolio</h2>
      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-6">
        <PortfolioCard
          img={cobhealth}
          desc="This is a sumamry of the cobhealth app"
          link="link herer"
          stack={["React, Tailwind, Context-Api, Git"]}
        />
        <PortfolioCard
          img={tiidehr}
          desc="This is a sumamry of the cobhealth app"
          link="link herer"
          stack={[" HTML,CSS, JavaScript, React,Redux, REST API, Git"]}
        />
        <PortfolioCard
          img={profilecard}
          desc="This is a sumamry of the cobhealth app"
          link="link herer"
          stack={["React, Tailwind, Git"]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
