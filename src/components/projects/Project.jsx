import React from 'react';
import './css/Project.css';

const Project = ({ project }) => {

  return (
    <div className="project-main-container">
        <h1 className="proj-title">{project.title}</h1>
        <img src={project.image} alt={project.title} className="proj-image" />
        <p className="proj-description">{project.description}</p>
    </div>
  );
};

export default Project;