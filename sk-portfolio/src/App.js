// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Element } from "react-scroll";

import Landing from "./components/Landing";
import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
    <CustomNavbar />
    <Element name="landing">
      <Landing />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="work">
      <Work/>
    </Element>
    <Element name="contact">
      <Contact/>
    </Element>
  </div>
  );
}

export default App;
