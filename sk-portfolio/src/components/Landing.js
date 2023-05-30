import React, { useRef } from "react";


import space from "../images/space.mp4";
import "../styles/Landing.css";
import Typewriter from "typewriter-effect";

const Landing = () => {

  return (
    <div className="landing-main" >
      <video src={space} autoPlay loop muted />
      <div
        id="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="landing-title">
          <span>hello, I'm</span> <br />
          <span className="landing-name">
            <span className="text-focus-in">Sana Khademi.</span>
          </span>
        </span>
        <span className="landing-body">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3500)
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
