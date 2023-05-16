import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import stars from "../images/stars.png";
import neptune from "../images/neptune.png";
import jupiter from "../images/jupiter.png";
import mercury from "../images/mercury.png";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">Some Things I've Built...</h2>
      <img src={stars} className="project-stars" alt="Stars" />
      <img src={neptune} className="project-neptune" alt="Neptune" />
      <div className="project-line-1-container">
        <div className="project-line-1"></div>
        <span className="project-text-1">OfferUp!</span>
        <div className="project-description-1">
          An e-commerce web app that offers Forward and Dutch auctions, allowing
          users to easily search, view and bid on items. With a simple checkout
          process and a user-friendly interface, the app offers a seamless
          bidding experience.
        </div>
        <div className="oval-shapes-1">
          <div className="oval-shape-1">React</div>
          <div className="oval-shape-1">Vite</div>
          <div className="oval-shape-1">JavaSpring Boot</div>
          <div className="oval-shape-1">MongoDB</div>
          <div className="oval-shape-1">Azure VMs</div>
          <div className="oval-shape-1">Docker</div>
        </div>
      </div>
      <img src={stars} className="project-stars" alt="Stars" />
      <img src={jupiter} className="project-jupiter" alt="Neptune" />
      <div className="project-line-2-container">
        <div className="project-line-2"></div>
        <span className="project-text-2">HealthVault</span>
        <div className="project-description-2">
          HealthVault is a centralized healthcare system that congregates data
          from various health data repositories in Ontario and provides
          physicians with access to and visualization of their patient's health
          data.
        </div>
        <div className="oval-shapes-2">
          <div className="oval-shape-2">React</div>
          <div className="oval-shape-2">Node.js</div>
          <div className="oval-shape-2">Vite</div>
          <div className="oval-shape-2">Python</div>
          <div className="oval-shape-2">JavaSpring Boot</div>
          <div className="oval-shape-2">MongoDB</div>
        </div>
      </div>
      <img src={stars} className="project-stars" alt="Stars" />
      <img src={mercury} className="project-mercury" alt="Mercury" />
      <div className="project-line-3-container">
        <div className="project-line-3"></div>
        <span className="project-text-3">Insights Spotify App</span>
        <div className="project-description-3">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </div>
        <div className="oval-shapes-3">
          <div className="oval-shape-3">React</div>
          <div className="oval-shape-3">Node.js</div>
          <div className="oval-shape-3">Vite</div>
          <div className="oval-shape-3">Python</div>
          <div className="oval-shape-3">JavaSpring Boot</div>
          <div className="oval-shape-3">MongoDB</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
