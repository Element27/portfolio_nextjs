import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import IconStack from "./iconStack";
// bg-[#dc3956]
const Footer = () => {
  return (
    <div className="min-h-[30vh] w-full  bg-gray-900 p-2 md:p-4">
      <h2 className="subheading mb-6">Links</h2>
      <div className="w-full px-1 md:px-4 py-6 flex flex-wrap justify-center items-center gap-4 md:gap-6 my-8">
        <IconStack
          icon={<FaGithubSquare className="text-[#c9510c]" />}
          title="Github"
        />
        <IconStack
          icon={<FaLinkedin className="text-[#0077b5]" />}
          title="LinkedIn"
        />
        <IconStack
          icon={<SiHashnode className="text-[#0000FF]" />}
          title="Hashnode"
        />
      </div>
      {/* <span>built by me for me...</span> */}
    </div>
  );
};

export default Footer;
