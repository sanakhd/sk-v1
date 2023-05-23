import React, { useEffect } from "react";

import { motion } from "framer-motion";
import "../styles/LoadingScreen.css";


const LoadingScreen = () => {


  return (
    <div className="loading-screen">
      <svg className="loader" viewBox="0 0 200 200">
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="transparent"
          strokeWidth="4"
          stroke="#fff"
          initial={{ strokeDasharray: "0 502" }}
          animate={{ strokeDasharray: "502 502" }}
          transition={{ duration: 2 }}
        />
        {/* Add text element */}
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fill="#fff"
          fontSize="60"
          fontWeight="100"
          fontFamily="Inter, sans-serif"
        >
          sk
        </text>
      </svg>
    </div>
  );
};

export default LoadingScreen;
