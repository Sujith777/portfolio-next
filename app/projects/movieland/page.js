import Image from "next/image";
import React from "react";
import movieland from "@/public/assets/projects/movieland.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Movieland = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          src={movieland}
          alt="movieland"
          style={{ objectFit: "cover" }}
          fill={true}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Movieland Landing Page</h2>
          <h3>ReactJS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a responsive layout for a movie service landing page that is
            built using ReactJs. It uses the OMDb API to fetch data to be
            displayed and has a search feature to filter the entries based on
            names.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://bsp-movieland.netlify.app/">Demo</Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/Sujith777/movieland">Code</Link>
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
                <RiRadioButtonFill /> JavaScript
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> OMDb API
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

export default Movieland;
