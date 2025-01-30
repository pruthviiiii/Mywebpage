import React from "react";
import "./projectdisplay.css";

function Projectdisplay(props) {
  return (
    <div>
      <div className="project ">
        <div className="domain p-1">
          <div className="dots mt-[1px] flex gap-1">
            <div className="dot bg-[#c94645]"></div>
            <div className="dot bg-[#e4c36e]"></div>
            <div className="dot bg-[#89cf8d]"></div>
          </div>
        </div>
        <div className="bg-[#edf1ff] dark:bg-[#22223b]">
          <h1 className="font-bold text-3xl pt-2 pb-1">{props.title}</h1>

          <img className="projectimgage mt-3" src={props.image} alt="Project Preview" />

          <div className="des mt-3 bg-[#ade8f4] flex dark:bg-[#edf1ff] dark:text-[#22223b]">
            <div className="dess flex-1 text-xs sm:text-sm text-left ">
              {props.des}
            </div>
          </div>
          <div className="flex mt-3 mx-0 w-90 justify-center p-2 gap-5">
            <a
              className="ap flex gap-1 text-[#314e89] dark:text-light-text"
              href={`${props.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 256 249"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <g fill="currentColor">
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                </g>
              </svg>{" "}
              Github
            </a>
            <a
              className="ap flex gap-1 text-[#314e89] dark:text-light-text"
              href={`${props.links.live}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                aria-hidden="true"
                focusable="false"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z" />
              </svg>
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectdisplay;
