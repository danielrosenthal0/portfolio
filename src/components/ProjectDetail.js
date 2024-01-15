import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id;

  const project = ProjectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className={styles.content}>Project not found</div>;
  }

  const { title, description, images } = project;

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.description}>
        {description ? description.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        )) : <p>No project description. Check back soon.</p>}
      </ul>
      {images ? images.map((image) => {
        return (
          <img src={image} alt=""/>
        )
      }) : null}
    </div>
  );
};

export default ProjectDetail;
