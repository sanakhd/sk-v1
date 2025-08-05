import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/About.css";


const About = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scroll ranges based on the about section position
  const aboutStart = windowHeight; // Assuming about starts after landing
  const zoomStart = aboutStart;
  const zoomEnd = aboutStart + windowHeight * 0.8;
  const contentStart = zoomEnd;
  const contentEnd = contentStart + windowHeight;

  // Transform values for the zoom effect
  const scale = useTransform(scrollY, [zoomStart, zoomEnd], [1, 3]);
  const textOpacity = useTransform(scrollY, [zoomStart, zoomEnd - 100], [1, 0]);

  // Transform values for the new content
  const contentOpacity = useTransform(scrollY, [contentStart - 600, contentStart], [0, 1]);
  const contentY = useTransform(scrollY, [contentStart - 200, contentStart], [50, 0]);

  return (
    <section className="about-section">
      {/* Zoom text container */}
      <div className="zoom-container">
        <motion.div
          style={{
            scale,
            opacity: textOpacity,
          }}
          className="zoom-text"
        >
          <h1 className="about-headline">Meet the Mind Behind the <br />Product.</h1>
        </motion.div>

        {/* Overlay that fades in during zoom */}
        <motion.div
          style={{ opacity: useTransform(scrollY, [zoomStart + 100, zoomEnd], [0, 1]) }}
          className="zoom-overlay"
        />
      </div>

      {/* New content that appears after zoom */}
      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className="about-content"
      >
        <div className="content-wrapper">
          <h2 className="content-title">SANA<span className="r-symbol">®</span></h2>

          <div className="product-tagline">
            <p className="tagline-text">Redesigned from the ground up.</p>
            <p className="tagline-subtext">Now with 10x deeper product instincts and infinite user empathy.</p>
          </div>

          <div className="features-section">
            <div className="feature-highlight">
              <div className="feature-icon">🧠</div>
              <h3>Product Intuition</h3>
              <p>Built-in ability to see what users need before they know it themselves. Powered by relentless curiosity and a love for solving real problems.</p>
            </div>

            <div className="feature-highlight">
              <div className="feature-icon">⚡</div>
              <h3>Rapid Prototyping</h3>
              <p>From concept to clickable prototype in hours, not days. Iterate fast, fail faster, learn fastest.</p>
            </div>

            <div className="feature-highlight">
              <div className="feature-icon">🎯</div>
              <h3>Obsessive Attention to Detail</h3>
              <p>Every pixel matters. Every interaction tells a story. Every feature serves a purpose.</p>
            </div>
          </div>

          <div className="tech-specs">
            <h3 className="specs-title">Technical Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Core Architecture</span>
                <span className="spec-value">Customer-Obsessed Mindset</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Operating System</span>
                <span className="spec-value">Creative Problem Solver 2.0</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">User Interface</span>
                <span className="spec-value">Empathetic Design Thinking</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Performance</span>
                <span className="spec-value">Caffeine-Optimized</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Compatibility</span>
                <span className="spec-value">Works with any team, any challenge</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Battery Life</span>
                <span className="spec-value">Unlimited when building cool stuff</span>
              </div>
            </div>
          </div>

          <div className="philosophy-section">
            <blockquote className="philosophy-quote">
              The best products don't just solve problems—they anticipate needs you didn't know you had.
            </blockquote>
            <p className="philosophy-author">— My approach to everything</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;