import React, { useState, useEffect } from "react";
import "../styles/Work.css";
import { BiRightArrow } from "react-icons/bi";

const Work = () => {
  const [selectedWork, setSelectedWork] = useState("scotiabank");
  const [description, setDescription] = useState(null);

  const getDescription = (work) => {
    switch (work) {
      case "scotiabank":
        return (
          <div className="job">
            Software Engineer Intern <span className="job-at">@Scotiabank</span>
            <br />
            <span className="date">May 2023-Present</span>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Designed, constructed, installed, tested, and maintained
                  highly scalable data management systems.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Ensured systems alignment with business requirements and
                  industry best practices.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Developed and implemented large-scale enterprise data
                  processes, leveraging automation for increased efficiency.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Built high-performance algorithms, prototypes, predictive
                  models, and proof of concepts to drive data-driven
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        );
      case "skinopathy":
        return (
          <div className="job">
            Software Engineer Intern <span className="job-at">@Skinopathy</span>{" "}
            <br />
            <span className="date">Sep 2022-April 2023</span>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                 
                </p>
              </div>
            </div>
          </div>
        );
      case "turtlejacks":
        return (
          <div className="job">
            Server <span className="job-at">@TurtleJacks</span> <br />
            <span className="date">June 2018-Present</span>
            <div className="arrow-container">
            <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Delivered exceptional customer service by warmly greeting and
                  engaging with patrons, attentively listening to their needs,
                  and providing personalized recommendations to enhance their
                  dining experience.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Exhibited a proactive approach to problem-solving by actively
                  anticipating and resolving customer inquiries, concerns, or
                  complaints, striving to exceed customer expectations and
                  maintain a positive and inviting atmosphere for all guests.
                </p>
              </div>
            </div>
          </div>
        );
      case "discoverygymnastics":
        return (
          <div className="job">
            Gymnastics Coach{" "}
            <span className="job-at">@DiscoveryGymnastics</span> <br />
            <span className="date">April 2016-June 2018</span>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Developed and implemented personalized exercise programs and
                  training strategies to enhance the performance and skill
                  development of gymnasts, fostering both individual and team
                  growth.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Maintained a dynamic and engaging atmosphere during coaching
                  sessions, striking a balance between fun-filled activities and
                  focused training, which encouraged student participation and
                  achievement.
                </p>
              </div>
            </div>
            <div className="arrow-container">
              <BiRightArrow className="arrow-icon" size={20} />
              <div className="arrow-content">
                <p>
                  Demonstrated a vigilant and attentive approach during
                  gymnastics events, closely monitoring athletes to ensure
                  adherence to safety protocols and provide immediate assistance
                  when needed.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    // Update the description when the component mounts
    setDescription(getDescription(selectedWork));
  }, [selectedWork]);

  const handleWorkClick = (work) => {
    setSelectedWork(work);
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
