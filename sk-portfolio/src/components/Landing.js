import React from "react";
import space from "../images/space.mp4";
import space2 from "../images/space2.mp4";

import "../styles/Landing.css";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="main">
      <video src={space} autoPlay loop muted />
      <div id="landing">
        <span className="title">
          <span>hello, I'm</span> <br />
          <span className="name">
          <span className="text-focus-in">Sana Khademi.</span>
          </span>
        </span>
        <span className="body">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .start()
                .typeString("designing a world I want to see")
                .pauseFor(2500);
            }}
          />
        </span>
      </div>
    </div>
  );
};
export default Landing;
