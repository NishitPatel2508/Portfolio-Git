import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { sumArray } from "../../data/sumArray";
import { project_data } from "../../data/project_data";
import ProjectCard from "./ProjectCard/ProjectCard";
const tabs = [{ name: "All" }, { name: "Frontend" }, { name: "Fullstack" }];
const Projects = () => {
  const [displayAbleProjects, setDisplayAbleProjects] = useState(project_data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(() => {
    const prevEle = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffSet(sumArray(prevEle.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") {
      return setDisplayAbleProjects(project_data);
    }
    const pro = project_data.filter(
      (item) => item.category.toLowerCase() == category.toLowerCase()
    );
    setDisplayAbleProjects(pro);
  };
  return (
    <section id="projects">
      <div className="project" id="project">
        <div className="projects-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        {/* <div className="projects-container"></div> */}
        <nav>
          {tabs.map((tab, index) => (
            <div
              className="btnStyle"
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </div>
          ))}
          <span
            className="active-indicator"
            style={{
              left: `${offSet}px`,
              width: `${indicatorWidth}px`,
              // textAlign: "center",
            }}
          ></span>
        </nav>
        <div className="card-container">
          {displayAbleProjects.map((project, index) => {
            return (
              <div>
                <ProjectCard
                  key={index}
                  title={project.title}
                  image={project.image}
                  data={project.data}
                  stack={project.stack}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
