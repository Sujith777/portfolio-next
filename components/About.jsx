import React from "react";
import Image from "next/image";
import laptop from "../public/assets/laptop.png";

const About = () => {
  return (
    <div
      id="about"
      className="md:px-16 sm:px-16 w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am Sujith Praveen Billa from Guntur, Andhra Pradesh, India, a
            Computer Science graduate from National Institute of Technology,
            Patna in 2023 looking for employment opportunities in Web
            Development and Machine Learning domains. I like to stay updated to
            the industry trends and open to learn new skills required for the
            role.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 md:rounded-xl">
          <Image className="rounded-xl" src={laptop} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default About;
