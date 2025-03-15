import React from "react";
import "./project.css";
import Projectdisplay from "./Projectdisplay";
import Projectcard from "./svg-folder/Projectcard";
import { featured, projects } from "./content/project";

function Project(props) {
  return (
    <div className="page pt-32 px-4 bg-light-modeC dark:bg-Dark-modeC min-h-screen">
      
      {/* GitHub Stats Section */}
      <h1 className="font-bold text-3xl text-left mb-12 text-gray-800 dark:text-white">
        GitHub Stats
      </h1>

      <div className="flex justify-center mb-20">
        {/* GitHub Streak Stats */}
        <img
          className="w-full md:w-3/4 max-w-3xl rounded-lg shadow-lg"

          src={
            props.darkMode
              ? "https://github-readme-streak-stats.herokuapp.com?user=pruthviiiii&theme=dark&hide_border=true"
              : "https://github-readme-streak-stats.herokuapp.com?user=pruthviiiii&theme=default&hide_border=true"
          }
          alt="GitHub Streak Stats"
        />
      </div>

      {/* Featured Projects */}
      <h1 className="font-bold text-3xl text-left mb-12 text-gray-800 dark:text-white">
         Featured Projects
      </h1>

      <div className="w-[96%] mx-auto flex flex-col gap-[50px]">
        {featured.map((item, idx) => (
          <Projectdisplay
            key={idx}
            title={item.title}
            des={item.des}
            links={item.links}
            image={item.image}
          />
        ))}
      </div>

      {/* More Projects */}
      <h1 className="font-bold text-3xl text-left mt-20 mb-10 text-gray-800 dark:text-white">
        🛠️ More Projects
      </h1>

      <div className="mt-5 projectgrid grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((item, idx) => (
          <Projectcard
            key={idx}
            title={item.title}
            des={item.des}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
