import React from "react";
import "./App.css";
import Home from "./Home";
import { useState } from "react";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Project from "./Components/Project";
import HobbiesandInterests from "./Components/HobbiesandInterests";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function App() {
  const [darkmode, setDarkmode] = useState(true);
  const [menue, setMenue] = useState(false);
  const closebur = () => {
    setMenue(false);
  };
  const scrollUp2=()=>{
    window.scrollTo({
      top:0,
      behavior:"auto"
    })
  }

  return (
    <div className={`App ${darkmode && "dark"} `}>
      <Router>
        <div className="bg-light-modeC dark:bg-Dark-modeC text-Dark-text dark:text-light-text">
          <nav className="navdetail flex bg-nav-light dark:bg-nav-dark gap-2">
            <div className="flex-1 flex justify-between ">
              <div className="flex-none">
                <Link to="/" className="font-bold text-lg sm:text-xl" onClick={scrollUp2} >
                  Ma
                </Link>
              </div>
              <div className="router flex-1 flex justify-evenly  text-light-head ">
                <Link to="/about" className="font-bold text-l" onClick={scrollUp2}>
                  About
                </Link>
                <Link to="/Projects" className="font-bold text-l" onClick={scrollUp2}>
                  Projects
                </Link>
                <Link to="/Hobbies" className="font-bold text-l" onClick={scrollUp2}>
                  Hobbies and Interests
                </Link>
              </div>
              <div className="flex-none mr-2 font-bold text-sm  gap-3 " >
                {darkmode ? (
                  <div
                    className="flex gap-2 px-3 py-1 rounded-md cursor-pointer bg-[#3a4254] dark:opacity-80 "
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
                    <span >Light Mode</span>
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
                className={`${menue && "line2close"}  bg-Dark-text dark:bg-light-text`}
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
              <Route path="/projects" element={<Project darkMode={darkmode} />} />
              <Route path="/Hobbies" element={<HobbiesandInterests />} />
              <Route path="*" element={<Home />} />
            </Routes>

            {/* <Home /> */}
            <hr className="line mt-4" />
            <footer className="mt-5 pb-5 flex flex-col justify-evenly">
              <div className="flex gap-10 mr-auto ml-auto mt-5">
                <a
                  title="Github"
                  href="https://github.com/mant3sh"
                  className="dark:text-light-text"
                  target="_blank"
                >
                  <svg
                      width="20"
                      height="20"
                      viewBox="0 0 256 249"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin meet"
                      >
                    <g fill="currentColor">
                      <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                      <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                    </g>
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
                    fill="currentcolor"
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
              <div className="font-medium  text-Dark-text text-xs dark:text-light-text">
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
