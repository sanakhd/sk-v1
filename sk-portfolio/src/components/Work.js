import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/Work.css"

const WorkExperience = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Create floating elements
    const floatingContainer = document.querySelector('.floating-elements');
    if (floatingContainer) {
      for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 6 + 's';
        element.style.animationDuration = (Math.random() * 4 + 4) + 's';
        floatingContainer.appendChild(element);
      }
    }
  }, []);

  const CountingNumber = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const ScotiabankSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
      { label: "Months", value: 18, suffix: "+" }, // Updated to include internship time
      { label: "Rotations", value: 3 }, // Including internship as first "rotation"
      { label: "Teams", value: 4 }, // Updated count
      { label: "Functions", value: 3 } // Engineering, DevOps concepts, Product
    ];

    const rotations = [
      {
        role: "Associate Technical Product Manager",
        period: "Present",
        rotation: "Rotation 3",
        focus: "CNAPP Product Management",
        achievements: [
          "Supporting CNAPP implementation on GCP infrastructure",
          "Refined 10+ high-priority CSPM feature requests",
          "Participating in Google's Terraform integration pilot"
        ],
        colorClass: "scotiabank-1"
      },
      {
        role: "Associate Product Manager",
        period: "Jan 2025 - Jun 2025",
        rotation: "Rotation 2",
        focus: "Cross Asset Product Management",
        achievements: [
          "Led end-to-end delivery of email service feature",
          "Consolidated 50+ email templates into 10 standardized formats",
          "Built Python script reducing QA time by 10+ hours per release"
        ],
        colorClass: "scotiabank-2"
      },
      {
        role: "Associate Software Engineer",
        period: "Jun 2024 – Dec 2024",
        rotation: "Rotation 1",
        focus: "Global Banking & Markets Engineering",
        achievements: [
          "Built backend workflows processing 10K+ row trade files",
          "Reverse engineered Excel trade output files across 10+ derivatives",
          "Built automated system alerts reducing downtime by 15 hours/month"
        ],
        colorClass: "scotiabank-3"
      },
      {
        role: "Software Engineer Intern",
        period: "May 2023 – Aug 2023",
        rotation: "Internship",
        focus: "Technology Operations & Engineering",
        achievements: [
          "Managed 200+ daily data processing jobs on Tidal platform",
          "Created 15+ Confluence documents for onboarding workflows",
          "Optimized data workflows post-migration, cutting runtime by 20%"
        ],
        colorClass: "scotiabank-4"
      }
    ];

    const highlights = [
      { icon: "🚀", title: "Product Management", desc: "Leadership across multiple rotations" },
      { icon: "⚡", title: "DevOps & Automation", desc: "Streamlined processes and workflows" },
      { icon: "🎯", title: "Cross-Functional", desc: "Collaboration across diverse teams" }
    ];

    return (
      <section className="experience-section scotiabank-section">
        <div className="experience-container">
          {/* Company Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="company-header-main"
          >
            <h2 className="company-name-main">Scotiabank</h2>
            <p className="company-subtitle-main">Complete Journey</p>
            <p className="company-period-main">May 2023 - Present</p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="experience-grid">
            {/* Left Side - Stats & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="experience-left"
            >
              <div className="stats-section">
                <h3 className="section-title">At a Glance</h3>
                <div className="stats-grid-compact">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                      className="stat-card-compact"
                    >
                      <div className="stat-number-compact">
                        <CountingNumber end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="stat-label-compact">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="highlights-section">
                <h3 className="section-title">Growth Story</h3>
                <div className="highlights-list">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="highlight-item-compact growth-story"
                  >
                    <div className="highlight-icon-compact">📈</div>
                    <div className="highlight-content">
                      <h4 className="highlight-title">From Intern to Product Leader</h4>
                      <p className="highlight-desc">Started as an intern, earned return offer, now building bridges between engineering and business</p>
                    </div>
                  </motion.div>

                  {highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.7 }}
                      className="highlight-item-compact"
                    >
                      <div className="highlight-icon-compact">{highlight.icon}</div>
                      <div className="highlight-content">
                        <h4 className="highlight-title">{highlight.title}</h4>
                        <p className="highlight-desc">{highlight.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Complete Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="experience-right"
            >
              <h3 className="section-title">Complete Timeline</h3>
              <div className="timeline-container">
                {rotations.map((rotation, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.5 }}
                    className={`timeline-item ${rotation.colorClass}`}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <div className="timeline-badge">{rotation.rotation}</div>
                        <div className="timeline-period">{rotation.period}</div>
                      </div>
                      <h4 className="timeline-role">{rotation.role}</h4>
                      <p className="timeline-focus">{rotation.focus}</p>
                      <div className="timeline-achievements">
                        {rotation.achievements.map((achievement, j) => (
                          <div key={j} className="timeline-achievement">
                            <div className="achievement-dot"></div>
                            <span className="achievement-text">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="timeline-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const TangerineSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
      { label: "Months", value: 4 },
      { label: "Automations", value: 5, suffix: "+" },
      { label: "Time Saved", value: 60, suffix: "%" },
      { label: "Deployments", value: 20, suffix: "+" }
    ];

    const projects = [
      {
        title: "GitHub Branch Automation",
        description: "Automated cleanup of 100+ GitHub branches",
        impact: "Reduced repository clutter by 85%"
      },
      {
        title: "Artifactory Optimization",
        description: "Streamlined setup reducing deployment time by 60%",
        impact: "Faster release cycles"
      },
      {
        title: "Error Reduction System",
        description: "Reduced manual errors by 30%",
        impact: "Improved reliability"
      }
    ];

    const techStack = ["Jenkins", "Artifactory", "Git", "Python", "Shell"];

    return (
      <section className="experience-section tangerine-section">
        <div className="experience-container">
          {/* Company Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="company-header-main tangerine-header"
          >
            <h2 className="company-name-main">Tangerine</h2>
            <p className="company-subtitle-main">DevOps Engineer Intern</p>
            <p className="company-period-main">Sep 2023 – Dec 2023</p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="experience-grid">
            {/* Left Side - Projects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="experience-left"
            >
              <div className="work-projects-section">
                <h3 className="section-title">Key Projects</h3>
                <div className="projects-list">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                      className="project-card-compact"
                    >
                      <div className="project-number-compact">{i + 1}</div>
                      <div className="project-content-compact">
                        <h4 className="project-title-compact">{project.title}</h4>
                        <p className="project-description-compact">{project.description}</p>
                        <div className="project-impact">{project.impact}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="tech-section">
                <h3 className="section-title">Tech Stack</h3>
                <div className="tech-stack-grid">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.7 }}
                      className="tech-tag-compact"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Stats & Impact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="experience-right"
            >
              <div className="stats-section">
                <h3 className="section-title">Impact Metrics</h3>
                <div className="stats-grid-compact">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                      className="stat-card-compact tangerine-stat"
                    >
                      <div className="stat-number-compact">
                        <CountingNumber end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="stat-label-compact">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="impact-section">
                <h3 className="section-title">Key Achievements</h3>
                <div className="impact-grid">
                  <div className="impact-item-compact">
                    <div className="impact-icon-compact">🔧</div>
                    <div className="impact-content">
                      <h4 className="impact-title">Process Optimization</h4>
                      <p className="impact-desc">Streamlined deployment workflows and reduced manual intervention</p>
                    </div>
                  </div>
                  <div className="impact-item-compact">
                    <div className="impact-icon-compact">⚡</div>
                    <div className="impact-content">
                      <h4 className="impact-title">Automation Excellence</h4>
                      <p className="impact-desc">Built robust automation systems improving team productivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const BeyondTechSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
      {
        role: "Gymnastics Coach",
        organization: "Gymnastics Club",
        period: "2016 - 2020",
        type: "Leadership",
        icon: "🤸‍♀️",
        skills: ["Team Leadership", "Individual Mentoring", "Performance Coaching"],
        impact: "Developed young athletes' skills and confidence",
        color: "emerald"
      },
      {
        role: "Peer Mentor",
        organization: "Tilt Mentorship Program",
        period: "2023 - Present",
        type: "Mentorship",
        icon: "🎓",
        skills: ["Guidance & Support", "Academic Planning", "Problem Solving"],
        impact: "Guided 15+ students through academic transitions",
        color: "blue"
      },
      {
        role: "Server",
        organization: "Restaurant Industry",
        period: "2019 - Present",
        type: "Customer Service",
        icon: "🍽️",
        skills: ["Customer Relations", "Multitasking", "Problem Resolution"],
        impact: "Managed high-volume service with positive customer satisfaction",
        color: "purple"
      },
      {
        role: "Competitive Gymnast",
        organization: "Provincial Level",
        period: "2007 - 2017",
        type: "Athletics",
        icon: "🏆",
        skills: ["Discipline & Focus", "Performance Under Pressure", "Goal Achievement"],
        impact: "7+ years competing at high-performance level",
        color: "orange"
      }
    ];

    const transferableSkills = [
      { skill: "Leadership", desc: "Guiding teams toward shared goals" },
      { skill: "Communication", desc: "Bridging diverse perspectives" },
      { skill: "Resilience", desc: "Performing under pressure" },
      { skill: "Mentoring", desc: "Developing others' potential" }
    ];

    return (
      <section className="beyond-tech-section">
        <div className="beyond-tech-container">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="beyond-tech-header"
          >
            <h2 className="beyond-tech-title">Beyond Tech</h2>
            <p className="beyond-tech-subtitle">
              The most valuable skills aren't always learned behind a screen.
              Leadership, resilience, and communication are built through diverse experiences.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="beyond-tech-content">
            {/* Left Side - Experience Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="experiences-showcase"
            >
              <div className="experiences-grid">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.4 }}
                    className={`experience-card ${exp.color}`}
                  >
                    <div className="card-header">
                      <div className="card-icon">{exp.icon}</div>
                      <div className="card-meta">
                        <div className="card-type">{exp.type}</div>
                        <div className="card-period">{exp.period}</div>
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-role">{exp.role}</h3>
                      <p className="card-organization">{exp.organization}</p>
                      <p className="card-impact">{exp.impact}</p>

                      <div className="card-skills">
                        {exp.skills.map((skill, j) => (
                          <span key={j} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Transferable Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="skills-highlight"
            >
              <h3 className="skills-title">Transferable Impact</h3>
              <p className="skills-description">
                These experiences shaped how I approach challenges, work with teams, and drive results in any environment.
              </p>

              <div className="skills-list">
                {transferableSkills.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.6 }}
                    className="skill-item"
                  >
                    <div className="skill-name">{item.skill}</div>
                    <div className="skill-description">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              <div className="skills-summary">
                <div className="summary-quote">
                  These experiences taught me that great products, like great service, start with understanding people.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="work-experience">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="floating-elements"></div>
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Career Evolution
          </motion.div>

          <motion.h1
            className="hero-title"
            style={{ willChange: 'transform' }} // Add this temporarily
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            From code to <span className="highlight-text">strategy</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Every line of code taught me something about solving problems.<br />
            Now I'm learning which problems matter most.
          </motion.p>

          <motion.div
            className="hero-journey-vertical"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="journey-timeline">
              <div className="journey-item">
                {/* <div className="journey-year"></div> */}
                <div className="journey-role">Student</div>
                <div className="journey-desc">Learning fundamentals, building foundation</div>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-item">
                <div className="journey-year">2023</div>
                <div className="journey-role">Intern</div>
                <div className="journey-desc">First tech experience, data workflows & automation</div>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-item">
                <div className="journey-year">2024</div>
                <div className="journey-role">Associate Software Engineer</div>
                <div className="journey-desc">Rotation program, diverse tech exposure</div>
              </div>
              <div className="journey-connector"></div>
              <div className="journey-item active">
                <div className="journey-year">2024</div>
                <div className="journey-role">Associate Technical Product Manager</div>
                <div className="journey-desc">Evolving into product, bridging tech and business</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="metric-item">
              <div className="metric-number">
                <CountingNumber end={2} suffix="+" />
              </div>
              <div className="metric-label">Years</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-number">
                <CountingNumber end={4} />
              </div>
              <div className="metric-label">Teams</div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <div className="metric-number">
                <CountingNumber end={12} suffix="+" />
              </div>
              <div className="metric-label">Skills</div>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="scroll-indicator">
              <span>Explore my journey</span>
              <div className="scroll-arrow">↓</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Sections */}
      <ScotiabankSection />
      <TangerineSection />
      <BeyondTechSection />
    </div>
  );
};

export default WorkExperience;