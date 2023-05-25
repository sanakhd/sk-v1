import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/LoadingScreen.css";

const LoadingScreen = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity:0}}
        >
          <svg
            className="loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="transparent"
              strokeWidth="4"
              stroke="#fff"
              initial={{ strokeDasharray: "0 600" }}
              animate={{ strokeDasharray: "600 600" }}
              transition={{ duration: 2 }}
            />
            <motion.text
              x="100"
              y="110"
              textAnchor="middle"
              fill="#fff"
              fontSize="60"
              fontWeight="200"
              fontFamily="Inter, sans-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              sk
            </motion.text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
