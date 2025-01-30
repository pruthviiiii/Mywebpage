import React from "react";
import "./home.css";
import bitmoji from "./Components/assests/profile2.jpeg";
import Projectdisplay from "./Components/Projectdisplay";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import TechStack from "./Components/TechStack";
import { featured } from "./Components/content/project";

function Home() {
  return (
    <div>
      <section>
        <div className="intro flex flex-row items-center px-2 pt-12">
          <div className="myself mt-3">
            <div className="picture w-[150px] ">
              <img
                className="pt-2 bg-light-modeC rounded-[50%] dark:bg-Dark-modeC "
                src={bitmoji}
                alt="Profile"
              />
            </div>
            <br />
            <div className="pt-2">
              <h1 className="text-center font-bold  text-[2.1rem]">
                <span className=" text-light-head "> Hi, I'm </span>
                <span>Mahantesha</span>

                <span className=" text-light-head "> from India </span>
              </h1>

              <p className="font-bold text-lg   ">
                Full Stack Developer and Tech Enthusiast
              </p>
              <br />
              <a
                href="https://drive.google.com/drive/folders/1xWFcfMAxRH78YCPz7nQ6NLMRjngrDZ0A?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center">
                  <div className="flex justify-center gap-1 w-[100px] bg-[#319795] text-white rounded-lg px-2 py-1">
                    <svg
                      className="mt-1"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      focusable="false"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z" />
                    </svg>
                    <span>Resume</span>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <Connect />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-2xl mt-10 sm:mt-0 text-left  dark:text-light-text">
          Tech Stack
        </h1>
        <br />
        <div className="w-[85%]  sm:w-[90%] mx-auto">
          <TechStack />
        </div>
      </section>
      <br />
      <section>
        <br />
        <Link to="/projects">
          <h1 className="font-bold text-2xl mt-10 sm:mt-0  text-left  dark:text-light-text">
            Projects
          </h1>
        </Link>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left ml-3">
          Featured Projects
        </h2>
      </section>
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
    </div>
  );
}

export default Home;
