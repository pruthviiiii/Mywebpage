import React from "react";
import "./home.css";
import bitmoji from "./Components/assests/hithere.png";
import Projectdisplay from "./Components/Projectdisplay";
import javascript from "./Components/svg-folder/javascript.svg";
import css from "./Components/svg-folder/css.svg";
import html5 from "./Components/svg-folder/html5.svg";
import cpp from "./Components/svg-folder/cpp.svg";
import java from "./Components/svg-folder/java.svg";
import python from "./Components/svg-folder/python.svg";
import gitt from "./Components/svg-folder/git.svg";
import github from "./Components/svg-folder/github.svg";
import mangodb from "./Components/svg-folder/mangodb.svg";
import nodejs from "./Components/svg-folder/nodejs.svg";
import react from "./Components/svg-folder/react.svg";
import Netlify from "./Components/svg-folder/netlify.svg";
import chug from "./Components/projectimg/chugnorris.png";
import weather from "./Components/projectimg/weatherapp.png";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function Home() {
  return (
    <div>
      <section>
        <div className="intro flex flex-row items-center pt-6">
          <div className="myself">
            <div className="picture">
              <img
                className="pt-6 bg-white dark:bg-[#1a202c]"
                src={bitmoji}
                alt=""
              />
            </div>
            <br />
            <div className="des">
              <h1 className="text-center font-bold text-2xl sm:text-4xl">
                <span className=" text-light-head "> Hi 👋, I'm </span>
                <span className="dark:text-white">Mahantesha</span>

                <span className=" text-light-head "> from India </span>
              </h1>
              <br />
              <h2 className="font-semibold text-l sm:text-2xl  dark:text-white">
                Full Stack Developer and Tech Enthusiat
              </h2>
              <br />
              <a
                href="#"
                className="resume text-lg text-white dark:text-black "
              >
                Resume
              </a>
              <div className="flex justify-evenly mt-8 dark:text-white">
                <a
                  title="Github"
                  href="https://github.com/mant3sh"
                  className="dark:text-white connect"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37.0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44.0 0020 4.77 5.07 5.07.0 0019.91 1S18.73.65 16 2.48a13.38 13.38.0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07.0 005 4.77 5.44 5.44.0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37.0 009 18.13V22" />
                  </svg>
                </a>
                <a
                  title="Linkedin"
                  className="connect"
                  href="https://www.linkedin.com/in/mahantesha-b-v/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentcolor"
                    class="feather feather-linkedin"
                    stroke-linecap="round"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526.0 1.175.0h13.65C15.474.0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487.0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837.0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822.0-1.359.54-1.359 1.248.0.694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869.0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274.0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54.0 01.016-.025V6.169h-2.4c.03.678.0 7.225.0 7.225h2.4z" />
                  </svg>
                </a>
                <a
                  title="Email"
                  href="mailto:mahantesha.bv1999@gmail.com"
                  target="_blank"
                  className="connect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a
                  title="Twitter"
                  href="https://twitter.com/mant3sh"
                  target="_blank"
                  className="connect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentcolor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9.0 01-3.14 1.53 4.48 4.48.0 00-7.86 3v1A10.66 10.66.0 013 4s-4 9 5 13a11.64 11.64.0 01-7 2c9 5 20 0 20-11.5a4.5 4.5.0 00-.08-.83A7.72 7.72.0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <br />
        <h1 className="font-bold text-2xl mt-10 sm:mt-0 sm:text-4xl text-left  dark:text-white">
          Tech Stack
        </h1>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left">
          Languages
        </h2>
        <br />
        <div className="flex flex-wrap justify-evenly gap-1 ">
          <div className="tech flex justify-evenly dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={javascript} alt="" srcset="" />
            JavaScript
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={cpp} alt="" srcset="" />
            c++
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={html5} alt="" srcset="" />
            Html 5
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={css} alt="" srcset="" />
            CSS
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={python} alt="" srcset="" />
            Python
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={java} alt="" srcset="" />
            java
          </div>
        </div>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left">
          Tools & Technology
        </h2>
        <br />
        <div className="flex flex-wrap justify-evenly gap-1">
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={react} alt="" srcset="" />
            React.js
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={github} alt="" srcset="" />
            GitHub
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={gitt} alt="" srcset="" />
            Git
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={mangodb} alt="" srcset="" />
            MongoDB
          </div>
          <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
            <img className="tech-img" src={nodejs} alt="" srcset="" />
            Node.js
          </div>
          <br />
        </div>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left">
          Platforms
        </h2>
        <br />
        <div className="tech flex justify-evenly  dark:bg-[#22223b] dark:text-white">
          <img className="tech-img" src={Netlify} alt="" srcset="" />
          Netlify
        </div>
      </section>
      <br />
      <section>
        <br />
        <h1 className="font-bold text-2xl mt-10 sm:mt-0 sm:text-4xl text-left  dark:text-white">
          Projects
        </h1>
        <br />
        <h2 className="text-l sm:text-2xl text-light-head text-left">
          Featured Projects
        </h2>
      </section>
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
      <br />
    </div>
  );
}

export default Home;
