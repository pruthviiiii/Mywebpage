import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css"; // ✅ Import the CSS file

const Navbar = ({ scrollUp2 }) => {
  const location = useLocation(); // ✅ Get the current route

  return (
    <nav className="navdetail">
      <div className="flex-1 flex justify-between">
        <div className="flex-none">
          <Link to="/" className="font-semibold text-xl" onClick={scrollUp2}>
            Pr.
          </Link>
        </div>
        <div className="router">
          <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} onClick={scrollUp2}>
            About
          </Link>
          <Link to="/projects" className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} onClick={scrollUp2}>
            Projects
          </Link>
          <Link to="/hobbies" className={`nav-link ${location.pathname === "/hobbies" ? "active" : ""}`} onClick={scrollUp2}>
            Hobbies and Interests
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
