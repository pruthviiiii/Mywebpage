import React from "react";

function Techdisplaybox({ image, tech }) {
  return (
    <div>
      <div className="tech flex justify-evenly bg-[#f6f6f6] dark:bg-[#22223b]">
        <img className="tech-img" src={image} alt="" srcset="" />
        <span className="text-sm mt-1 dark:text-[#ffffff]"> {tech}</span>
      </div>
    </div>
  );
}

export default Techdisplaybox;
