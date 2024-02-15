import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import saas_app from "@/public/assets/projects/saas-app.png";

const SaasApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10 " />
        <Image
          className="absolute z-1"
          src={saas_app}
          alt="saas_app"
          style={{ objectFit: "cover" }}
          fill={true}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">A Service as a Service(SaaS) application</h2>
          <h3>
            NextJS / Typescript / Prisma / Supabase / Stripe / KindeAuth /
            Tailwind CSS{" "}
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a responsive full-stack Service as a Service(SaaS)
            application that uses NextJS, Shadcn and Tailwind CSS for the
            frontend and UI, and leverages the Supabase PostgreSQL database.
            KindeAuth provider handles authentication and is integrated with
            stripe to facilitate payments. It is written in Typescript.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://bsp-saas-app.vercel.app">Demo</Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/Sujith777/saas-app">Code</Link>
          </button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> NextJS
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Supabase
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Typescript
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Prisma
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Stripe
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> KindeAuth
              </p>
              <p className="text-gray-600 items-center py-2 flex">
                <RiRadioButtonFill /> Tailwind CSS
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

export default SaasApp;
