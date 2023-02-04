import Image from "next/image";
import React from "react";

interface PortfolioCardProps {
  img: any;
  desc: string;
  link: string;
  stack: String[];
}

const PortfolioCard = ({ img, desc, link, stack }: PortfolioCardProps) => {
  const stackLI = stack.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });
  return (
    <div className="rounded-lg w-full lg:w-1/3 px-2 py-2 bg-blue-600 shadow-xl hover:scale-105 transition linear duration-500">
      {/* image and description */}
      <Image src={img} alt="/" className="rounded-t-md" />
      <div className="">
        <p className="my-4 font-semibold text-gray-900">
          {desc}
          <a
            href={link}
            className="text-gray-800 cursor-pointer hover:underline"
          >
            Live Link
          </a>
        </p>

        <ul className="flex flex-wrap gap-x-4 text-gray-700 italic">
          <p className="font-semibold  text-black">Stack:</p>
          {stackLI}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
