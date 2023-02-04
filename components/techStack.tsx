import React from "react";
import {
  IconAdobephotoshop,
  IconAirballoon,
  IconBxlCss3,
  IconFiletypeScss,
  IconGit,
  IconHtml5,
  IconLogoJavascript,
  IconNextjs,
  IconReact,
  IconRedux,
  IconTailwindcss,
  IconTypescript,
} from "./Icons";
import IconStack from "./iconStack";

const TtechStack = () => {
  return (
    <div className="bg-black/95 py-8 border-t-8 border-blue-600">
      <h2 className="subheading">Tech Stack</h2>
      <div className="w-full px-4 py-6 flex flex-wrap justify-center items-center gap-6 my-8">
        <IconStack
          icon={<IconLogoJavascript className="text-[#f7df1e]" />}
          title="JavaScript"
        />
        <IconStack
          icon={<IconTypescript className="text-[#3178c6]" />}
          title="TypeScript"
        />
        <IconStack
          icon={<IconReact className="text-[#00d8ff]" />}
          title="React"
        />
        <IconStack
          icon={<IconNextjs className="text-slate-200" />}
          title="Next JS"
        />
        <IconStack
          icon={<IconRedux className="text-[#00d8ff]" />}
          title="React Redux"
        />
        <IconStack
          icon={<IconBxlCss3 className="text-[#2449D8]" />}
          title="CSS3"
        />
        <IconStack
          icon={<IconTailwindcss className="text-[#35B3EB]" />}
          title="TailwindCSS"
        />
        <IconStack
          icon={<IconFiletypeScss className="text-[#C36291]" />}
          title="SCSS"
        />
        <IconStack
          icon={<IconHtml5 className="text-[#D84924]" />}
          title="HTML5"
        />
        <IconStack icon={<IconGit className="text-[#f14e32]" />} title="Git" />
        <IconStack
          icon={<IconAirballoon className="text-[#5C9F06]" />}
          title="CorelDraw"
        />
        <IconStack
          icon={<IconAdobephotoshop className="text-[#2F9FF2]" />}
          title="PhotoShop"
        />
      </div>
    </div>
  );
};

export default TtechStack;
