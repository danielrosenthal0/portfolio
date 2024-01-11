// ProjectCard.js
import React from "react";
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ id, title, description, images, video }) => {
  return (
    <div className={styles.cardContainer}>
      <Link to={`/projects/${id}`}>
        <div className={styles.cardContent}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
