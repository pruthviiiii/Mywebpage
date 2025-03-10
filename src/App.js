import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./Components/About";
import Project from "./Components/Project";
import HobbiesandInterests from "./Components/HobbiesandInterests";
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";

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
    <div className={`App ${darkmode && "dark"}`}>
      <div className="bg-light-modeC dark:bg-Dark-modeC text-Dark-text dark:text-light-text">
        <Router>
          <div className="transition-colors">
            <nav className="navdetail flex bg-nav-light dark:bg-nav-dark gap-2 p-4 relative">
              <div className="flex-1 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-none">
                  <NavLink
                    to="/"
                    onClick={scrollUp2}
                    className={({ isActive }) =>
                      `relative text-xl transition-all duration-200 
                      font-bold inline-block 
                      hover:scale-125 hover:text-green-700 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                      after:w-0 after:h-[2px] after:bg-green-950 after:transition-all after:duration-300 
                      hover:after:w-full 
                      ${isActive ? "scale-125 text-green-700 after:w-full" : ""}`
                    }
                  >
                    Pr.
                  </NavLink>
                </div>

                {/* Links (Desktop Only) */}
                <div className="router flex-1 justify-evenly font-semibold text-light-head hidden sm:flex">
                  <NavLink
                    to="/about"
                    onClick={scrollUp2}
                    className={({ isActive }) =>
                      `relative text-lg transition-all duration-200 
                      hover:scale-110 hover:text-green-700 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                      after:w-0 after:h-[2px] after:bg-green-950 after:transition-all after:duration-300 
                      hover:after:w-full 
                      ${isActive ? "scale-110 text-green-700 after:w-full" : ""}`
                    }
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/Projects"
                    onClick={scrollUp2}
                    className={({ isActive }) =>
                      `relative text-lg transition-all duration-200 
                      hover:scale-110 hover:text-green-700 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                      after:w-0 after:h-[2px] after:bg-green-950 after:transition-all after:duration-300 
                      hover:after:w-full 
                      ${isActive ? "scale-110 text-green-700 after:w-full" : ""}`
                    }
                  >
                    Projects
                  </NavLink>

                  <NavLink
                    to="/Hobbies"
                    onClick={scrollUp2}
                    className={({ isActive }) =>
                      `relative text-lg transition-all duration-200 
                      hover:scale-110 hover:text-green-700 
                      after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
                      after:w-0 after:h-[2px] after:bg-green-950 after:transition-all after:duration-300 
                      hover:after:w-full 
                      ${isActive ? "scale-110 text-green-700 after:w-full" : ""}`
                    }
                  >
                    Hobbies and Interests
                  </NavLink>
                </div>

                {/* Desktop Dark Mode Toggle */}
                <div className="flex-none mr-2 font-semibold text-sm gap-3 hidden sm:flex">
                  {darkmode ? (
                    <div
                      className="flex gap-2 px-3 py-1 rounded-md cursor-pointer bg-[rgba(255,255,255,0.08)]"
                      onClick={() => setDarkmode(false)}
                    >
                      🌞 <span className="text-[#e2e8f0]">Light Mode</span>
                    </div>
                  ) : (
                    <div
                      className="flex gap-2 px-3 py-1 rounded-md cursor-pointer bg-[#edf2f7]"
                      onClick={() => setDarkmode(true)}
                    >
                      🌙 <span>Dark Mode</span>
                    </div>
                  )}
                </div>

                {/* Mobile Buttons: Dark Mode & Burger */}
                <div className="flex sm:hidden items-center gap-3">
                  {/* Mobile Dark Mode Toggle */}
                  <div className="flex-none font-semibold text-sm">
                    {darkmode ? (
                      <div
                        className="flex gap-2 px-2 py-1 rounded-md cursor-pointer bg-[rgba(255,255,255,0.08)]"
                        onClick={() => setDarkmode(false)}
                      >
                        🌞
                      </div>
                    ) : (
                      <div
                        className="flex gap-2 px-2 py-1 rounded-md cursor-pointer bg-[#edf2f7]"
                        onClick={() => setDarkmode(true)}
                      >
                        🌙
                      </div>
                    )}
                  </div>

                  {/* Burger Menu Button */}
                  <button
                    onClick={() => setMenue(!menue)}
                    className="text-xl focus:outline-none"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </nav>

            {/* Burger Menu Content (Mobile Only) */}
            {menue && (
              <div className="burgermenue sm:hidden fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50">
                <div className="menu-box pt-[20vh] flex flex-col items-center gap-[10vh] text-2xl sm:text-3xl bg-[#f6f6f6] dark:bg-[#1a202c] text-Dark-text dark:text-light-text h-full">
                  <Link
                    to="/"
                    onClick={() => {
                      closebur();
                      scrollUp2();
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => {
                      closebur();
                      scrollUp2();
                    }}
                  >
                    About
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => {
                      closebur();
                      scrollUp2();
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/Hobbies"
                    onClick={() => {
                      closebur();
                      scrollUp2();
                    }}
                  >
                    Hobbies and Interests
                  </Link>
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="containerr">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project darkMode={darkmode} />} />
                <Route path="/Hobbies" element={<HobbiesandInterests />} />
                <Route path="*" element={<Home />} />
              </Routes>

              {/* Footer */}
              <footer className="mt-5 pb-5 flex flex-col justify-evenly">
                <div className="flex gap-10 mr-auto ml-auto mt-5 text-sm text-Dark-text underline dark:text-[#6b7280]">
                  <a href="https://github.com/pruthviiiii" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                  <a href="https://www.linkedin.com/in/pruthviraj-hanumantharayappa/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                  </a>
                  <a href="mailto:pruthviraj3234@gmail.com" target="_blank" rel="noopener noreferrer">
                    Email
                  </a>
                </div>
                <br />
                <div className="font-medium text-Dark-text text-xs dark:text-light-text">
                  Built with 💜 by Pruthviraj
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
