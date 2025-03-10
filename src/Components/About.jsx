import React from "react";
import "./about.css";

function About() {
  return (
    <div className="aboutpage pt-32  bg-light-modeC  dark:bg-Dark-modeC  ">
      <div>
        <div className="mt-6">
          <h1 className="font-bold text-4xl text-left">
            <span role="img" aria-label="Waving hand">👋</span> Hi, how are you?
          </h1>
          <br />
          <p className="text-left">
            Pruthvi this side, a Bachelor's in Engineering Graduate from Siddaganga Institute
            of Technology, Tumakuru (🇮🇳) majoring in Electronics and
            Telecommunication. I'm a Full Stack Developer, familiar with the MERN
            stack. I'm a huge technology enthusiast.
          </p>
          <br />
          <p className="text-left">
          Spending more time in the digital space over the past few years has deepened my passion for technology and full-stack development. 
          Currently I am working as a full stack web developer at <a href="https://hutechsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-green-700">HuTech Solutions</a>.
          </p>
          <br />
          <div className="flex gap-6 mt-8 mr-2">
            <a
              title="Github"
              href="https://github.com/pruthviiiii"
              className="dark:text-light-text connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37.0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44.0 0020 4.77 5.07 5.07.0 0019.91 1S18.73.65 16 2.48a13.38 13.38.0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07.0 005 4.77 5.44 5.44.0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37.0 009 18.13V22" />
              </svg>
            </a>
            <a
              title="Linkedin"
              className="connect"
              href="https://www.linkedin.com/in/pruthviraj-hanumantharayappa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                fill="currentColor"
                className="feather feather-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526.0 1.175.0h13.65C15.474.0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487.0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837.0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822.0-1.359.54-1.359 1.248.0.694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869.0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274.0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54.0 01.016-.025V6.169h-2.4c.03.678.0 7.225.0 7.225h2.4z" />
              </svg>
            </a>
            <a
              title="Email"
              href="mailto:pruthviraj3234@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="connect"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
            </a>
            
          </div>
          <br />
          <br />
          <h1 className="text-3xl font-bold text-left">
            My Interests lie in:
          </h1>
          <ul className="list-none text-left">
            <li className="text-base font-medium">
            <span role="img" aria-label="link">🔗</span> Full Stack Development

            </li>
            <li className="text-base font-medium">
            <span role="img" aria-label="link">🔗</span> Data Structures and Algorithms

            </li>
            <li className="text-base font-medium">
            <span role="img" aria-label="link">🔗</span> Problem Solving

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
