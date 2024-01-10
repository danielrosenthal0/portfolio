import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id;

  // Find the project data based on the ID
  const project = ProjectData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, description, images, video } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Display images, videos, or additional information */}
    </div>
  );
};

export default ProjectDetail;
