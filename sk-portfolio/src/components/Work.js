import React, { useState } from "react";

import "../styles/Work.css";
import { BiRightArrow } from "react-icons/bi";

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const [description, setDescription] = useState(null);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    // Set the corresponding description based on the selected work
    switch (work) {
      case "scotiabank":
        setDescription(
          <div className="job">
            Software Engineer @Scotiabank <br />
            <span className="date">May 2023-Present</span>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
            </div>
          </div>
        );
        break;
      case "skinopathy":
        setDescription(
          <div className="job">
            Software Engineer @Skinopathy <br />
            <span className="date">May 2023-Present</span>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
            </div>
          </div>
        );
        break;
      case "turtlejacks":
        setDescription(
            <div className="job">
              Server @TurtleJacks <br />
              <span className="date">May 2023-Present</span>
              <div className="arrow-container">
                <BiRightArrow className="arrow-icon" size={20} />
              </div>
            </div>
          );
        break;
      case "discoverygymnastics":
        setDescription(
            <div className="job">
              Gymnastics Coach @DiscoveryGymnastics <br />
              <span className="date">May 2023-Present</span>
              <div className="arrow-container">
                <BiRightArrow className="arrow-icon" size={20} />
              </div>
            </div>
          );
        break;
      default:
        setDescription(null);
    }
  };

  return (
    <div id="work">
      <div className="work-container">
        <h2 className="work-title">
          <span>where</span> I've worked
        </h2>
        <div className="workbar-container">
          <div className="vertical-line"></div>
          <ul className="workbar">
            <li className="workbar-item">
              <a href="#work1" onClick={() => handleWorkClick("scotiabank")}>
                SCOTIABANK
              </a>
            </li>
            <li className="workbar-item">
              <a href="#work2" onClick={() => handleWorkClick("skinopathy")}>
                SKINOPATHY
              </a>
            </li>
            <li className="workbar-item">
              <a href="#work3" onClick={() => handleWorkClick("turtlejacks")}>
                TURTLE JACKS
              </a>
            </li>
            <li
              className="workbar-item"
              onClick={() => handleWorkClick("discoverygymnastics")}
            >
              <a href="#work4">DISCOVERY GYMNASTICS</a>
            </li>
          </ul>
        </div>
        {selectedWork && (
          <div
            className={`rectangle ${
              selectedWork === "scotiabank" ? "scotiabank-description" : ""
            }`}
          >
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
