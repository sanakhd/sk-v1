import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/Projects.css";
import spotifyImage from "../images/spotify.png";
import tipTrendzImage from "../images/tiptrendz.png";
import offerUpImage from "../images/offerup.png";
import skImage from "../images/sk-v3.png";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "SK-V3",
      category: "Web Application",
      description: "A modern, responsive portfolio website showcasing the evolution of my personal brand and technical skills. Built with performance and user experience in mind, featuring smooth animations, mobile-first design, and clean, professional aesthetics.",
      technologies: ["JavaScript","React", "CSS" ],
      image: skImage,
      link: "https://github.com/sanakhd/sk-v1",
      color: "blue"
    },
    {
      id: 2,
      title: "Insights Spotify App",
      category: "Web Application",
      description: "A personalized music analytics web app that transforms your Spotify listening habits into beautiful visualizations. Discover your top artists, favorite tracks, recent listening history, and dive deep into the audio characteristics that define your musical taste.",
      technologies: ["React", "Express", "Spotify API"],
      image: spotifyImage,
      link: "https://insights-spotify-app.herokuapp.com/",
      color: "orange"
    },
    {
      id: 3,
      title: "TipTrendz",
      category: "Web Application",
      description: "A comprehensive financial tracking platform built specifically for service workers to gain better visibility into their income patterns and budgeting habits. Features intuitive user dashboards that visualize earnings data, helping users make informed financial decisions.",
      technologies: ["JavaSpring Boot", "React", "Postgres"],
      image: tipTrendzImage,
      link: "#",
      color: "green"
    },
    {
      id: 4,
      title: "Offer Up!",
      category: "E-commerce Web Application",
      description: "A dynamic auction-based e-commerce platform offering both Forward and Dutch auction formats. Users can seamlessly search, browse, and bid on items through an intuitive interface, complete with streamlined checkout processes and real-time bidding updates.",
      technologies: ["JavaSpring Boot", "MongoDB", "Docker"],
      image: offerUpImage,
      link: "https://github.com/sanakhd/OfferUp",
      color: "purple"
    },
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Building solutions that bridge technology and real-world problems
          </p>
        </motion.div>

        {/* Projects Slider Container */}
        <div className="projects-slider">
          <div className="projects-track">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.color}`}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumbnail"
                  />
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
