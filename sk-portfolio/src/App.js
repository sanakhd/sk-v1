import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";

import LoadingScreen from "./components/LoadingScreen";
import Landing from "./components/Landing";
import CustomNavbar from "./components/CustomNavbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Set the desired loading duration
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
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
            <Work />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;
