import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import notflix from "@/public/assets/projects/notflix.png";

const NetflixClone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          src={notflix}
          alt="notflix"
          style={{ objectFit: "cover" }}
          fill={true}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix Clone</h2>
          <h3>ReactJS / Tailwind CSS/ Firebase </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a responsive clone layout for netflix that is built using
            ReactJs and Tailwind CSS for styling. It uses the TMDb API to fetch
            data and Firebase to handle the backend and hosting.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://netflix-clone-e140b.web.app/">Demo</Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/Sujith777/netflix-clone">Code</Link>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> React
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Tailwind CSS
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> TMDb API
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default NetflixClone;
