import React from "react";

const ProjectDetail = ({ id, title, description, images, video }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Display images, videos, or additional information */}
    </div>
  );
};

export default ProjectDetail;
