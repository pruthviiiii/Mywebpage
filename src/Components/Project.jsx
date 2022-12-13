import React from "react";
import "./project.css";
import Projectdisplay from "./Projectdisplay";
import chug from "./projectimg/chugnorris.png";
import weather from "./projectimg/weatherapp.png";
import Projectcard from "./svg-folder/Projectcard";

function Project(props) {
  return (
    <div className=" page pt-32  bg-light-modeC dark:bg-Dark-modeC ">
      <br />
      <br />
      <h1 className=" font-bold text-2xl text-left">Github Stats</h1>
      <br />
      <br />
      <img
        className="mx-auto"
        src={
          props.darkMode
            ? "https://github-readme-streak-stats.herokuapp.com?user=mant3sh&theme=dark&hide_border=true"
            : "https://streak-stats.demolab.com/?user=mant3sh"
        }
        alt=""
      />
      <br />
      <br />
      <h1 className=" font-bold text-2xl text-left">Featured Projects</h1>
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
      <br />
      <br />
      <br />
      <h1 className=" font-bold text-2xl text-left">More Projects</h1>
      <div className="mt-5 projectgrid grid grid-cols-1 sm:grid-cols-2  gap-6">
        <div>
          <Projectcard
            title={"React weather App v-1"}
            des={
              "Built a weather forecasting site using OpenWeather API,the user can search for weather information of any place in the world and can see hourly and weekly forecasts."
            }
            links={{
              github: "https://github.com/mant3sh/react-weatherapp",
              live: "https://mant3sh.github.io/react-weatherapp/",
            }}
          />
        </div>
        <div>
          <Projectcard
            title={"Whack a Mole Game"}
            des={
              "Built a static web page of a popular game whack a mole using only HTML,CSS and JavaScript."
            }
            links={{
              github: "https://github.com/mant3sh/Whack-a-mole-Game-",
              live: "https://github.com/mant3sh/Whack-a-mole-Game-",
            }}
          />
        </div>

        <div>
          <Projectcard
            title={"More vanilla JavaScript Projects"}
            des={
              "Collection of Proejcts built using only vanilla JavaScript. Projects like Simple Calculator, Sign Up Page, Todo List etc"
            }
            links={{
              github: "https://github.com/mant3sh/vanillaJavaScript-projects",
              live: "https://github.com/mant3sh/vanillaJavaScript-projects",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
