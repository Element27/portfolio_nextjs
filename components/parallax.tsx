import React from "react";
import HeroNext from "./HeroNext";
import HeroTop from "./heroTop";

const Parallax = () => {
  return (
    <div className="relative w-screen min-h-[200vh] bg-second-bg bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-between gap-28">
      <HeroTop />
      <HeroNext />
    </div>
  );
};

export default Parallax;
