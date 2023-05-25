import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "rsuite";
import "../styles/CustomNavbar.css";
import logo from "../images/logo.ico";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const CustomNavbar = () => {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(true);
  }, []);

  return (
    <div className="navbar">
      <Nav appearance="subtle">
        <Navbar>
          <Navbar.Brand className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Nav className="navbar-items">
            <Nav.Item className={`navbar-item ${showItems ? "show" : ""}`}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  home&nbsp;&nbsp;&nbsp;
                </Link>
              </motion.div>
            </Nav.Item>
            <Nav.Item className={`navbar-item ${showItems ? "show" : ""}`}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  about&nbsp;&nbsp;&nbsp;
                </Link>
              </motion.div>
            </Nav.Item>
            <Nav.Item className={`navbar-item ${showItems ? "show" : ""}`}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  projects&nbsp;&nbsp;&nbsp;
                </Link>
              </motion.div>
            </Nav.Item>
            <Nav.Item className={`navbar-item ${showItems ? "show" : ""}`}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  work&nbsp;&nbsp;&nbsp;
                </Link>
              </motion.div>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Nav>
    </div>
  );
};

export default CustomNavbar;
