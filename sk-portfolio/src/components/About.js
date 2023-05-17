import React from "react";

import "../styles/About.css";
import "../styles/Card.css";
import Typewriter from "typewriter-effect";

import window from "../images/window.png";
import astronautSit from "../images/astronautSit.png";
import astro from "../images/astro.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-main">
        <div className="about-content">
          <div className="about-title">A GLIMPSE INTO MY WORLD</div>
        </div>
        <img src={window} className="about-window" />
      </div>
      <div className="card">
        <div className="content">
          <span className="about-text-1">
            I'm a <span className="about-bold">software engineer</span> based in
            Toronto, Canada, with a passion for{" "}
            <span
              className="about-text-1"
              style={{
                color: "#73c3bb",
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
              }}
            >
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
                    .typeString("everything in between.")
                    .start();
                }}
              />
            </span>
          </span>
          <span className="about-text-2">
            As a{" "}
            <span className="about-bold">multidisciplinary professional</span>,
            I'm always <span className="about-bold">exploring</span> new ways to
            bridge the gap between technology and creativity, and to{" "}
            <span className="about-bold">create</span> digital experiences that
            leave a lasting <span className="about-bold">impact</span>.
          </span>
          <span className="about-text-3">
            Whether I'm working on a new software product, designing a website,
            or exploring the latest trends in user experience design, I'm always{" "}
            <span className="about-bold">driven</span> by a deep{" "}
            <span className="about-bold">curiosity</span> and a desire to push
            the boundaries of what's possible.
          </span>
          <span className="about-text-4">
            Through this website, I invite you to join me on a{" "}
            <span className="about-bold">journey</span> into my world, where I
            hope to <span className="about-bold">inspire</span> and{" "}
            <span className="about-bold">engage</span> you with my{" "}
            <span className="about-bold">creative</span> vision and technical
            expertise.
          </span>
        </div>
      </div>
      <img src={astro} className="about-astronaut" alt="Astronaut" />
    </div>
  );
};

export default About;
