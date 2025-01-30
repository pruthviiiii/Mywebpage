import React from "react";
import javascript from "./svg-folder/javascript.svg";
import css from "./svg-folder/css.svg";
import html5 from "./svg-folder/html5.svg";
import cpp from "./svg-folder/cpp.svg";
import gitt from "./svg-folder/git.svg";
import github from "./svg-folder/github.svg";
import mongodb from "./svg-folder/mongodb.svg";
import nodejs from "./svg-folder/nodejs.svg";
import react from "./svg-folder/react.svg";
import redux from "./svg-folder/redux.svg";
import Netlify from "./svg-folder/netlify.svg";
import Techdisplaybox from "./Techdisplaybox";
import express from "./svg-folder/express.svg";
import firebase from "./svg-folder/firebase.svg";
function TechStack() {
  return (
    <div>
      <h2 className="text-xl text-light-head text-left">Languages</h2>
      <br />
      <div className="flex flex-wrap justify-between gap-1 ">
        <Techdisplaybox image={javascript} tech={"JavaScript"} />
        <Techdisplaybox image={cpp} tech={"C++"} />
        <Techdisplaybox image={html5} tech={"Html 5"} />
        <Techdisplaybox image={css} tech={"CSS"} />
      </div>
      <br />
      <h2 className="text-xl text-light-head text-left">Tools & Technology</h2>
      <br />
      <div className="flex justify-between flex-wrap gap-1">
        <Techdisplaybox image={react} tech={"React js"} />
        <Techdisplaybox image={redux} tech={"Redux"} />
        <Techdisplaybox image={express} tech={"Express"} />
        <Techdisplaybox image={mongodb} tech={"Mongo DB"} />
        <Techdisplaybox image={nodejs} tech={"Node js"} />
        <Techdisplaybox image={firebase} tech={"Firebase"} />
        <Techdisplaybox image={github} tech={"GitHub"} />
        <Techdisplaybox image={gitt} tech={"Git"} />
      </div>

      <br />
      <h2 className="text-xl text-light-head text-left">Platforms</h2>
      <br />

      <Techdisplaybox image={Netlify} tech={"Netlify"} />
    </div>
  );
}

export default TechStack;
