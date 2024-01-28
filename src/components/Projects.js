import React, { Fragment } from "react";
import classes from "./Projects.module.css";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const sortedProjects = [...ProjectCardData].sort((a, b) => {
    const dateA = new Date(`${a.date.slice(0, 2)}/01/${a.date.slice(3)}`);
    const dateB = new Date(`${b.date.slice(0, 2)}/01/${b.date.slice(3)}`);

    return dateB - dateA;
  })
  return (
    <Fragment>
      <div className={classes.content}>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
