import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id;

  const project = ProjectData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, description, images, video } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectDetail;
