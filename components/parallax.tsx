import React from "react";
import HeroNext from "./HeroNext";
import HeroTop from "./heroTop";

const Parallax = () => {
  return (
    <div className="relative w-screen h-[200vh] bg-second-bg bg-fixed bg-center bg-no-repeat bg-cover">
      <HeroTop />
      <HeroNext />
    </div>
  );
};

export default Parallax;
