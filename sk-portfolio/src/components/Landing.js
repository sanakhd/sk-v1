import React, { useEffect, useState } from "react";
import space from "../images/space.mp4";

import "../styles/Landing.css";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-main">
      <video src={space} autoPlay loop muted />
      <div id="landing" className={`${showAnimation ? "show-animation" : ""}`}>
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
