import React from "react";
import javascript from "./svg-folder/javascript.svg";
import css from "./svg-folder/css.svg";
import html5 from "./svg-folder/html5.svg";
import cpp from "./svg-folder/cpp.svg";
import java from "./svg-folder/java.svg";
import python from "./svg-folder/python.svg";
import gitt from "./svg-folder/git.svg";
import github from "./svg-folder/github.svg";
import mangodb from "./svg-folder/mangodb.svg";
import nodejs from "./svg-folder/nodejs.svg";
import react from "./svg-folder/react.svg";
import Netlify from "./svg-folder/netlify.svg";
import Techdisplaybox from "./Techdisplaybox";

function TechStack() {
  return (
    <div>
      <h2 className="text-l sm:text-lg text-light-head text-left">Languages</h2>
      <br />
      <div className="flex flex-wrap justify-between gap-1 ">
        <Techdisplaybox image={javascript} tech={"JavaScript"} />
        <Techdisplaybox image={cpp} tech={"C++"} />
        <Techdisplaybox image={html5} tech={"Html 5"} />
        <Techdisplaybox image={css} tech={"CSS"} />
        <Techdisplaybox image={python} tech={"Python"} />
        <Techdisplaybox image={java} tech={"Java"} />
      </div>
      <br />
      <h2 className=" sm:text-lg text-light-head text-left">
        Tools & Technology
      </h2>
      <br />
      <div className="flex justify-between flex-wrap gap-1">
        <Techdisplaybox image={react} tech={"React js"} />
        <Techdisplaybox image={github} tech={"GitHub"} />
        <Techdisplaybox image={gitt} tech={"Git"} />
        <Techdisplaybox image={mangodb} tech={"Mongo DB"} />
        <Techdisplaybox image={nodejs} tech={"Node js"} />
      </div>

      <br />
      <h2 className=" sm:text-lg text-light-head text-left">Platforms</h2>
      <br />
      <div className="tech flex justify-betweeen  dark:bg-[#414181] dark:text-white">
        <img className="tech-img" src={Netlify} alt="" srcset="" />
        Netlify
      </div>
    </div>
  );
}

export default TechStack;
