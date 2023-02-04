import React from "react";
import { IconGithub, IconHashnode, IconLinkedin } from "./Icons";
import IconStack from "./iconStack";
// bg-[#dc3956]
const Footer = () => {
  return (
    <div className="min-h-[30vh] w-full  bg-gray-900  p-4">
      <h2 className="subheading mb-6">Links:</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <IconStack
          icon={<IconGithub className="text-[#c9510c]" />}
          title="Github"
        />
        <IconStack
          icon={<IconLinkedin className="text-[#0077b5]" />}
          title="LinkedIn"
        />
        <IconStack
          icon={<IconHashnode className="text-[#0000FF]" />}
          title="Hashnode"
        />
      </div>
    </div>
  );
};

export default Footer;
