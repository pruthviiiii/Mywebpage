import React from "react";

function Techdisplaybox({ image, tech }) {
  return (
    <div>
      <div className="tech flex justify-evenly dark:bg-[#414181]   dark:text-white">
        <img className="tech-img" src={image} alt="" srcset="" />
        <span className="text-sm mt-1"> {tech}</span>
      </div>
    </div>
  );
}

export default Techdisplaybox;
