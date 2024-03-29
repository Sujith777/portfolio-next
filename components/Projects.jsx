import React from "react";
import {
  foodapp,
  hoobank,
  movieland,
  tindog,
  notflix,
  bookingapp,
  netflixClone,
  ecommerce,
  snapgram,
  saas_app,
} from "../public/assets/projects/projects";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:px-16 sm:px-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-[#5651e5]">Projects</p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="E-Commerce website"
            backgroundImg={ecommerce}
            projectUrl="/projects/ecommerce"
            technologies="NextJS, Typescript, Prisma, PostgreSQL"
          />

          <ProjectItem
            title="Snapgram"
            backgroundImg={snapgram}
            projectUrl="/projects/snapgram"
            technologies="ReactJS, Appwrite, React Query, Typescript, Prisma"
          />

          <ProjectItem
            title="SaaS Website"
            backgroundImg={saas_app}
            projectUrl="/projects/saas-app"
            technologies="NextJS, Typescript, Prisma, Supabase, Stripe, KindeAuth"
          />

          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixClone}
            projectUrl="/projects/netflix-clone-next"
            technologies="NextJS, Typescript, Prisma, MongoDB"
          />

          <ProjectItem
            title="Booking App"
            backgroundImg={bookingapp}
            projectUrl="/projects/booking-app"
            technologies="MongoDB, Express, React, Node"
          />

          <ProjectItem
            title="Netflix UI Clone"
            backgroundImg={notflix}
            projectUrl="/projects/netflix-clone"
            technologies="ReactJS"
          />

          <ProjectItem
            title="Hoobank Landing Page"
            backgroundImg={hoobank}
            projectUrl="/projects/hoobank"
            technologies="ReactJS"
          />

          <ProjectItem
            title="Food App"
            backgroundImg={foodapp}
            projectUrl="/projects/foodapp"
            technologies="ReactJS"
          />

          <ProjectItem
            title="Movieland"
            backgroundImg={movieland}
            projectUrl="/projects/movieland"
            technologies="ReactJS"
          />

          <ProjectItem
            title="Tindog"
            backgroundImg={tindog}
            projectUrl="/projects/tindog"
            technologies="HTML & CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
