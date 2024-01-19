import React, { Fragment } from "react";
import classes from "./Projects.module.css";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes.content}>
        {ProjectCardData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
