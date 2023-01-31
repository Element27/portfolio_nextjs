import React from "react";

const HeroNext = () => {
  return (
    <div className="bg-black/95 text-gray-400 flex  justify-around flex-col gap-4 md:flex-6 md:flex-row px-4 py-8 absolute bottom-0 text-base lg:text-lg border-t-8 border-[#dc3956]">
      <p className="w-full md:w-[45%]">
        Akinbo Olamilekan Daniel is a Frontend Developer with a curious and
        creative mind, excited about the possibilities in modern technologies
        particularly Web 3, blockchain, and Artificial Intelligence. <br />
        He was a fellow at TIIDELab a 6-month-long tech fellowship where he
        gained mastery in frontend web development and was awarded a certificate
        of completion, and an outstanding team member certificate, among others.
        During his time at the fellowship, he worked in a team of 10 to build
        TIIDE-Hr, an Employee management system for MSMEs to manage employee
        records and automate HR processes. Personally, He has built the front
        end of an appointment management system for hospitals to schedule and
        manage patient records and appointment schedules.
      </p>

      <p className="w-full md:w-[45%]">
        He is competent in JavaScript and TypeScript and is familiar with
        GoLang, and styles with CSS, SCSS and Tailwind CSS. He can also work
        some magic with Corel Draw, PhotoShop, and Figma. Daniel is a jovial and
        affable individual, always ready to listen, help and empathise - you can
        call him “best friend material”. He is a good communicator and presenter
        and could easily pass for a public speaker under the right circumstance.
        <br />
        He is a graduate of Mass Communication from Yaba College of Technology,
        a technical writer, and a constant learner. In his spare time, Daniel
        plays Scrabble, Chess and Sodoku fun.
        <button className="border border-[#dc3956] py-4 px-12 my-4 rounded hover:bg-[#dc3956] hover:font-semibold text-white">
          Download CV
        </button>
      </p>
    </div>
  );
};

export default HeroNext;
