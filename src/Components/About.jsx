import React from "react";
import "./about.css";
import profile from "./assests/profile.png";

function About() {
  return (
    <div className="aboutpage pt-32  bg-light-modeC  dark:bg-Dark-modeC  ">
      <div>
        <div className="mt-6">
          <h1 className=" font-bold text-2xl text-left">
            👋 Hi, how are you?{" "}
          </h1>
          <br />
          <p className=" text-left text-sm sm:text-base">
            {" "}
            Mahantesh this side, a BE Graduate(2022) from Siddaganga Institute
            of Technology,Tumakuru(🇮🇳) majoring in Electronics and
            Telecommunication. I'm a Full Stack Developer, familiar with MERN
            stack.I'm a huge technology enthuiast.
          </p>
          <br />
          <p className=" text-left text-sm sm:text-base">
            The recent outbreak of the global pandemic, which led to the
            lockdown, has made me a typical computer nerd. Currently iam looking
            for Internship/Full time opportunity in Front end development.
          </p>
          <br />
          <div className="flex gap-6 mt-8 mr-2 ">
            <a
              title="Github"
              href="https://github.com/mant3sh"
              className="dark:text-light-text connect"
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
                className="feather feather-github"
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
                className="feather feather-linkedin"
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
                className="feather feather-mail"
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
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9.0 01-3.14 1.53 4.48 4.48.0 00-7.86 3v1A10.66 10.66.0 013 4s-4 9 5 13a11.64 11.64.0 01-7 2c9 5 20 0 20-11.5a4.5 4.5.0 00-.08-.83A7.72 7.72.0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1xWFcfMAxRH78YCPz7nQ6NLMRjngrDZ0A?usp=share_link"
              title="Resume"
              target="_blank"
              className=" connect"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                focusable="false"
                className="chakra-icon chakra-emotion-css-m9n82g"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
              </svg>
            </a>
          </div>
          <br />
          <h1 className="text-2xl font-bold  text-left">
            My Interests lies in:
          </h1>
          <ul className="list-none text-left">
            <li className="  text-sm font-medium">🔗 Full Stack Development</li>

            <li className="  text-sm font-medium">
              🔗 Data structures and Algorithms
            </li>

            <li className=" text-sm font-medium">🔗 Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
