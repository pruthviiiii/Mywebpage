import React from "react";
import "./App.css";
import Home from "./Home";
import { useState } from "react";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Project from "./Components/Project";
import HobbiesandInterests from "./Components/HobbiesandInterests";
import hi from "./Components/assests/hithere.png";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [menue, setMenue] = useState(false);
  const closebur = () => {
    setMenue(false);
  };

  return (
    <div className={`App ${darkmode && "dark"}`}>
      <Router>
        <div className="bg-white dark:bg-[#1a202c]">
          <nav className="navdetail bg-white dark:bg-[#1a202c] flex gap-2">
            <div className="flex-1 flex justify-between ">
              <div className="flex-none">
                <Link to="/" className="font-bold text-xl dark:text-white">
                  MB
                </Link>
              </div>
              <div className="router flex-1 flex justify-evenly  text-light-head ">
                <Link to="/about" className="font-bold text-l">
                  About
                </Link>
                <Link to="/Projects" className="font-bold text-l">
                  Projects
                </Link>
                <Link to="/Hobbis" className="font-bold text-l">
                  Hobbies and Interests
                </Link>
              </div>
              <div className="flex-none font-bold text-l  gap-3 ">
                {darkmode ? (
                  <div
                    className="flex gap-2 px-3 rounded-md cursor-pointer bg-[#7b7b7b] dark:text-white "
                    onClick={() => {
                      setDarkmode(!darkmode);
                    }}
                  >
                    <svg
                      className="mt-2"
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
                    <span>Light Mode</span>
                  </div>
                ) : (
                  <div
                    className="flex gap-2 px-3 rounded-md cursor-pointer bg-[#edf2f7] relative"
                    onClick={() => {
                      setDarkmode(!darkmode);
                    }}
                  >
                    <svg
                      className="mt-2"
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
                } bg-black dark:bg-white`}
              ></div>
              <div
                className={`${menue && "line2close"}  bg-black dark:bg-white`}
                id={`${menue && "line2close"}`}
              ></div>
              <div
                className={` ${!menue && "line3open"} ${
                  menue && "line3close"
                } bg-black dark:bg-white`}
              ></div>
            </div>
          </nav>

          <div className="containerr">
            {menue && (
              <div className="burgermenue ">
                <div className="menu-box pt-32 flex flex-col gap-12   text-2xl sm:text-3xl bg-[#f6f6f6] dark:bg-[#1a202c] dark:text-white">
                  <Link
                    to="/"
                    onClick={() => {
                      closebur();
                    }}
                    className="font-bold  inline-block"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => {
                      closebur();
                    }}
                    className="font-bold  inline-block"
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => {
                      closebur();
                    }}
                    className="font-bold  inline-block"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/Hobbis"
                    onClick={() => {
                      closebur();
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
              <Route path="/projects" element={<Project />} />
              <Route path="/Hobbis" element={<HobbiesandInterests />} />
            </Routes>

            {/* <Home /> */}
            <hr className="line mt-4" />
            <footer className="mt-5 pb-5 flex flex-col justify-evenly">
              <div className="flex gap-10 mr-auto ml-auto dark:text-white mt-5">
                <a
                  title="Github"
                  href="https://github.com/mant3sh"
                  className="dark:text-white"
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
                  href="mailto:mahantesha.bv1999@gmail.com"
                  target="_blank"
                  title="Email"
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
                  href="https://twitter.com/mant3sh"
                  target="_blank"
                  title="twitter"
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
              <br />
              <div className="font-medium  dark:text-white">
                Built with 💜 by Mahantesha
              </div>
            </footer>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
