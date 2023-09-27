import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center md:px-16 sm:px-16">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Sujith</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a full-stack web developer with knowledge and hands-on
            experience with both front-end and backend web technologies like
            HTML, CSS, JavaScript, Typescript, MongoDB, ExpressJS, ReactJS,
            NodeJS, NextJS, Firebase, Redux, REST API, BootStrap, Tailwind CSS,
            Responsive Design etc.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 easein duration-300">
              <Link href="https://www.linkedin.com/in/sujith-praveen-billa/">
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 easein duration-300">
              <Link href="https://github.com/Sujith777">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 easein duration-300">
              <Link href="mailto:billasujith77@gmail.com">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 easein duration-300">
              <Link href="tel:7013578650">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
