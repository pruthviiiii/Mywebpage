import React from "react";
import "./App.css";
import Home from "./Home";
import { useState } from "react";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Project from "./Components/Project";
import HobbiesandInterests from "./Components/HobbiesandInterests";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [menue, setMenue] = useState(false);
  const closebur = () => {
    setMenue(false);
  };
  const scrollUp2 = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className={`App ${darkmode && "dark"}  `}>
      <div className=" bg-light-modeC dark:bg-Dark-modeC text-Dark-text dark:text-light-text ">
        <Router>
          <div className="transition-colors">
            <nav className="navdetail flex bg-nav-light dark:bg-nav-dark gap-2">
              <div className="flex-1 flex justify-between ">
                <div className="flex-none">
                  <Link
                    to="/"
                    className="font-semibold text-xl"
                    onClick={scrollUp2}
                  >
                    Ma.
                  </Link>
                </div>
                <div className="router flex-1 flex justify-evenly font-semibold  text-light-head ">
                  <Link to="/about" onClick={scrollUp2}>
                    About
                  </Link>
                  <Link to="/Projects" onClick={scrollUp2}>
                    Projects
                  </Link>
                  <Link to="/Hobbies" onClick={scrollUp2}>
                    Hobbies and Interests
                  </Link>
                </div>
                <div className="flex-none mr-2 font-semibold text-sm  gap-3 ">
                  {darkmode ? (
                    <div
                      className="flex gap-2 px-3 py-1 rounded-md cursor-pointer bg-[rgba(255,255,255,0.08)]  "
                      onClick={() => {
                        setDarkmode(!darkmode);
                      }}
                    >
                      <svg
                        className="mt-[0.20rem]"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                        </g>
                      </svg>
                      <span className="text-[#e2e8f0]">Light Mode</span>
                    </div>
                  ) : (
                    <div
                      className="flex gap-2 px-3 py-1 rounded-md cursor-pointer bg-[#edf2f7] relative"
                      onClick={() => {
                        setDarkmode(!darkmode);
                      }}
                    >
                      <svg
                        className="mt-[0.20rem]"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                        </g>
                      </svg>
                      <span>Dark Mode</span>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="burger flex-none "
                onClick={() => {
                  setMenue(!menue);
                }}
              >
                <div
                  className={`${!menue && "line1open"} ${
                    menue && "line1close"
                  } bg-Dark-text dark:bg-light-text`}
                ></div>
                <div
                  className={`${
                    menue && "line2close"
                  }  bg-Dark-text dark:bg-light-text`}
                  id={`${menue && "line2close"}`}
                ></div>
                <div
                  className={` ${!menue && "line3open"} ${
                    menue && "line3close"
                  } bg-Dark-text dark:bg-light-text`}
                ></div>
              </div>
            </nav>

            <div className="containerr">
              {menue && (
                <div className="burgermenue ">
                  <div className="menu-box pt-[20vh] flex flex-col gap-[10vh]  text-2xl sm:text-3xl bg-[#f6f6f6] dark:bg-[#1a202c] text-Dark-text dark:text-light-text">
                    <Link
                      to="/"
                      onClick={() => {
                        closebur();
                        scrollUp2();
                      }}
                      className="font-bold  inline-block"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => {
                        closebur();
                        scrollUp2();
                      }}
                      className="font-bold  inline-block"
                    >
                      About
                    </Link>
                    <Link
                      to="/projects"
                      onClick={() => {
                        closebur();
                        scrollUp2();
                      }}
                      className="font-bold  inline-block"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/Hobbies"
                      onClick={() => {
                        closebur();
                        scrollUp2();
                      }}
                      className="font-bold  inline-block"
                    >
                      Hobbies and Interests
                    </Link>
                  </div>
                </div>
              )}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/projects"
                  element={<Project darkMode={darkmode} />}
                />
                <Route path="/Hobbies" element={<HobbiesandInterests />} />
                <Route path="*" element={<Home />} />
              </Routes>

              {/* <Home /> */}
              <hr className="mt-12" />

              <footer className="mt-5 pb-5 flex flex-col justify-evenly">
                <div className="flex gap-10 mr-auto ml-auto mt-5 text-sm text-Dark-text underline   dark:text-[#6b7280]">
                  <a
                    title="Github"
                    href="https://github.com/mant3sh"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    title="Linkedin"
                    href="https://www.linkedin.com/in/mahantesha-b-v/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  <a
                    href="mailto:mahantesha.bv1999@gmail.com"
                    target="_blank"
                    title="Email"
                  >
                    Email
                  </a>
                  <a
                    href="https://twitter.com/mant3sh"
                    target="_blank"
                    title="twitter"
                  >
                    twitter
                  </a>
                </div>
                <br />
                <div className="font-medium  text-Dark-text text-xs dark:text-light-text">
                  Built with 💜 by Mahantesha
                </div>
              </footer>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
