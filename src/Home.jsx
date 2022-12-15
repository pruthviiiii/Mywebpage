import React from "react";
import "./home.css";
import bitmoji from "./Components/assests/profile2.png";
import Projectdisplay from "./Components/Projectdisplay";
import chug from "./Components/projectimg/chugnorris.png";
import netflixclone from "./Components/projectimg/netflixclone.png";
import weather from "./Components/projectimg/weatherapp.png";
import { Link } from "react-router-dom";
import Connect from "./Connect";
import TechStack from "./Components/TechStack";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function Home() {
  return (
    <div>
      <section>
        <div className="intro flex flex-row items-center pt-12">
          <div className="myself mt-3">
            <div className="picture w-[150px] ">
              <img
                className="pt-2 bg-light-modeC rounded-[50%] dark:bg-Dark-modeC "
                src={bitmoji}
                alt=""
              />
            </div>
            <br />
            <div className="des">
              <h1 className="text-center font-bold text-2xl sm:text-[2rem]">
                <span className=" text-light-head "> Hi, I'm </span>
                <span>Mahantesha</span>

                <span className=" text-light-head "> from India </span>
              </h1>
              <br />
              <p className="font-bold text-lg sm:text-lg  ">
                Full Stack Developer and Tech Enthusiat
              </p>
              <br />
              <a
                href="https://drive.google.com/drive/folders/1xWFcfMAxRH78YCPz7nQ6NLMRjngrDZ0A?usp=share_link"
                // className="resume text-lg text-white dark:text-black "
                target="_blank"
              >
                <div className="flex justify-center">
                  <div className="flex justify-center gap-1 w-[100px] bg-[#319795] text-white rounded-lg px-2 py-1">
                    <svg
                      className="mt-1"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
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
        <h1 className="font-bold text-2xl mt-10 sm:mt-0 text-left  dark:text-white">
          Tech Stack
        </h1>
        <br />
        <div className="w-[94%] mx-auto">
          <TechStack />
        </div>
      </section>
      <br />
      <section>
        <br />
        <Link to="/projects">
          <h1 className="font-bold text-2xl mt-10 sm:mt-0  text-left  dark:text-white">
            Projects
          </h1>
        </Link>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left ml-3">
          Featured Projects
        </h2>
      </section>
      <br />
      <div>
        <br />
        <br />
        <Projectdisplay
          title={"NETFLIX Clone "}
          des={
            "A Netflix Clone App built using React js & TMDB API to fetch all the popular movies, top-rated shows, what's trending, collections, lists, and much more."
          }
          image={netflixclone}
          links={{
            github: "https://github.com/mant3sh/Netflix-Clone",
            live: "https://netflix-clone-mant3sh.netlify.app/",
          }}
        />
        <br />
        <br />
        <Projectdisplay
          title={"Weather Forecasting Site"}
          des={
            "Built a weather forecasting site using OpenWeather API,the user can search for weather information of any place in the world and can see hourly and weekly forecasts. "
          }
          image={weather}
          links={{
            github: "https://github.com/mant3sh/reat-weatherForecast-v-2",
            live: "https://mant3sh.github.io/reat-weatherForecast-v-2/",
          }}
        />
        <br />
        <br />

        <Projectdisplay
          title={"Chuck Norris Joke page"}
          des={
            "React application acting as client for REST-API provided by api.chucknorris.io which gives random jokes as per user selected category ,using  react hooks application can able to fetch jokes on a click with out reloading the page."
          }
          image={chug}
          links={{
            github: "https://github.com/mant3sh/chucknorris-joke-react",
            live: "https://mant3sh.github.io/chucknorris-joke-react/",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
