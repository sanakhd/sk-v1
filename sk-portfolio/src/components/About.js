import React, { useEffect } from "react";

import "../styles/About.css";
import stars from "../images/stars.png";
import sk from "../images/sk.JPG";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about">
      <div className="main">
        <img src={sk} className="about-image fade-in" />
      </div>
      <span className="about-title">a glimpse into my world</span>
      <span className="about-text-1">
        I'm a <span className="about-bold">software engineer </span>based in
        Toronto, Canada, with a passion for
        <span className="about-animation">
          {" "}
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString("design")
                .deleteAll()
                .typeString("development")
                .deleteAll()
                .typeString("product management")
                .deleteAll()
                .typeString("everything in between")
                .start();
            }}
          />
        </span>
      </span>
      <span className="about-text-2">
        As a <span className="about-bold">multidisciplinary professional </span>
        , I'm always <span className="about-bold">exploring </span> new ways to
        bridge the gap between technology and creativity, and to{" "}
        <span className="about-bold">create </span>digital experiences that
        leave a lasting <span className="about-bold"> impact</span>.
      </span>
      <span className="about-text-3">
        Whether I'm working on a new software product, designing a website, or
        exploring the latest trends in user experience design, I'm always{" "}
        <span className="about-bold">driven </span>
        by a deep <span className="about-bold">curiosity </span> and a desire to push the boundaries of
        what's possible.
      </span>
      <span className="about-text-4">
        Through this website, I invite you to join me on a journey into my
        world, where I hope to inspire and engage you with my creative vision
        and technical expertise.
      </span>
    </div>
  );
};
export default About;
