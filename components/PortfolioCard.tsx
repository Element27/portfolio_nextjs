import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

interface PortfolioCardProps {
  img: any;
  link: string;
  stack: String[];
}

const PortfolioCard = ({ img, stack, link }: PortfolioCardProps) => {
  const stackLI = stack.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });
  return (
    <div className="relative rounded-lg w-full lg:w-1/3 px-2 py-2 bg-black/10 hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 shadow-xl hover:scale-105 transition linear duration-500">
      {/* image and description */}
      <Image src={img} alt="/" className="rounded-t-md" />

      <Link
        target="_blank"
        href={link}
        className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-2xl"
      >
        <BiLinkExternal className="text-2xl lg:text-3xl gradient " />
      </Link>

      <div className="">
        <ul className="flex flex-wrap gap-x-4 text-gray-700 italic font-bold">
          <p className="font-semibold  text-black">Stack:</p>
          {stackLI}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
