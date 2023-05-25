import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import space from "../images/space.mp4";
import "../styles/Landing.css";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);


  return (
    <motion.div className="landing-main" style={{ opacity }} ref={targetRef}>
      <video src={space} autoPlay loop muted />
      <motion.div
        id="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.span className="landing-title" style={{ scale }}>
          <span>hello, I'm</span> <br />
          <span className="landing-name">
            <span className="text-focus-in">Sana Khademi.</span>
          </span>
        </motion.span>
        <motion.span className="landing-body" style={{ scale }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3500)
                .start()
                .typeString("designing a world I want to see")
                .pauseFor(2500);
            }}
          />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
export default Landing;
