import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../images/landing.png";
import "../styles/Landing.css";

const Landing = () => {
  const { scrollY } = useScroll();

  // Fade the image as user scrolls down
  const imageOpacity = useTransform(scrollY, [300, 800], [1, 0]);

  return (
    <div className="landing-container">
      <div className="sana-text">
        SANA<span className="trademark">®</span>
      </div>

      <div className="pill-container">
        <div className="pill-highlight"></div>
        <div className="pill-text-left">PRODUCT MIND.</div>
        <div className="pill-text-right">ENGINEERING CORE.</div>
      </div>

      <motion.div
        className="bottom-image"
        style={{ opacity: imageOpacity }}
      >
        <img src={heroImage} alt="Sana" className="landing-hero-image" />
      </motion.div>
    </div>
  );
};

export default Landing;