import React from "react";
import "../styles/Projects.css";
import stars from "../images/stars.png";
import neptune from "../images/neptune.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="background-container">
        <h2 className="projects-heading">Some Things I've Built...</h2>
        <img src={stars} className="project-stars" alt="Stars" />
        <img src={neptune} className="project-neptune" alt="Neptune" />
        <div className="project-line">
          <span className="project-text-1">Offer Up</span>
        </div>
        <div className="project-content-1">
          <div className="project-description-1">
            An e-commerce web app that offers Forward and Dutch auctions,
            allowing users to easily search, view and bid on items. With a
            simple checkout process and a user-friendly interface, the app
            offers a seamless bidding experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
