import React from "react";
import { IconAirballoon, IconFiletypeScss, IconTrpc } from "./Icons";

import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiCss3,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiAdobephotoshop,
  SiNodedotjs,
} from "react-icons/si";
import IconStack from "./iconStack";

const TtechStack = () => {
  return (
    <div className="bg-black/95 py-8 border-t-8 border-blue-600">
      <h2 className="subheading">Stacks & Libraries</h2>
      <div className="w-full px-1 md:px-4 py-6  gap-4 md:gap-6 my-8">
        {/* languages */}
        <div className="mb-8">
          <h3 className="subheading_h3 mb-6 pb-4">Languages</h3>
          <div className="flex w-full gap-4">
            <IconStack
              icon={<SiJavascript className="text-[#f7df1e]" />}
              title="JavaScript"
            />

            <IconStack
              icon={<SiTypescript className="text-[#3178c6]" />}
              title="TypeScript"
            />
          </div>
        </div>

        {/* frameworks /libraries */}
        <div className="mb-8">
          <h3 className="subheading_h3 mb-6 pb-4">Frameworks & Libraries</h3>
          <div className="flex flex-wrap w-full gap-4">
            <IconStack
              icon={<FaReact className="text-[#00d8ff]" />}
              title="React"
            />

            <IconStack
              icon={<SiNextdotjs className="text-slate-200" />}
              title="Next JS"
            />
            <IconStack
              icon={<IconTrpc className="text-[#398ccb]" />}
              title="tRPC"
            />

            <IconStack
              icon={<SiNodedotjs className="text-[#5C9F06]" />}
              title="Node JS"
            />
          </div>
        </div>

        {/* other tools */}
        <div className="mb-8">
          <h3 className="subheading_h3 mb-6 pb-4 w-full lg:w-[30%]">
            Other Tools
          </h3>
          <div className="flex flex-wrap w-full gap-4">
            <IconStack
              icon={<SiCss3 className="text-[#2449D8]" />}
              title="CSS3"
            />
            <IconStack
              icon={<SiTailwindcss className="text-[#35B3EB]" />}
              title="TailwindCSS"
            />
            <IconStack
              icon={<IconFiletypeScss className="text-[#C36291]" />}
              title="SCSS"
            />
            <IconStack
              icon={<SiHtml5 className="text-[#D84924]" />}
              title="HTML5"
            />
            <IconStack
              icon={<SiGit className="text-[#f14e32]" />}
              title="Git"
            />
            <IconStack
              icon={<IconAirballoon className="text-[#5C9F06]" />}
              title="CorelDraw"
            />
            <IconStack
              icon={<SiRedux className="text-[#00d8ff]" />}
              title="Redux"
            />
            '
            <IconStack
              icon={<SiAdobephotoshop className="text-[#2F9FF2]" />}
              title="PhotoShop"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TtechStack;
