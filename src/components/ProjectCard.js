import React from "react";
import { Link } from 'react-router-dom';


const ProjectCard = ({ id, title, description, images, video }) => {
  return (
    <div>
      <Link to={`/projects/${id}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
