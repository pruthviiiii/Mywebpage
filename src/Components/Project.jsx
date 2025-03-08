import React from "react";
import "./project.css";
import Projectdisplay from "./Projectdisplay";
import Projectcard from "./svg-folder/Projectcard";
import { featured, projects } from "./content/project";

function Project(props) {
  return (
    <div className="page pt-32 bg-light-modeC dark:bg-Dark-modeC">
      <br />
      <br />
      <h1 className="font-bold text-2xl text-left">Github Stats</h1>
      <br />
      <br />
      <img
        className="mx-auto"
        src={
          props.darkMode
            ? "https://github-readme-streak-stats.herokuapp.com?user=pruthviiiii&theme=dark&hide_border=true"
            : "https://streak-stats.demolab.com/?user=pruthviiiii"
        }
        alt="GitHub Streak Stats"
      />
      <br />
      <br />
      <h1 className="font-bold text-2xl text-left">Featured Projects</h1>
      <br />
      <br />
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
      <br />
      <br />
      <h1 className="font-bold text-2xl text-left">More Projects</h1>
      <div className="mt-5 projectgrid grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((item, idx) => (
          <Projectcard key={idx} title={item.title} des={item.des} links={item.links} />
        ))}
      </div>
    </div>
  );
}

export default Project;
