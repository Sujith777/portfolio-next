import React from "react";
import {
  foodapp,
  hoobank,
  movieland,
  tindog,
  notflix,
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
            title="Netflix Clone"
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
