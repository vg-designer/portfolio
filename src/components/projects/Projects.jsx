import React from 'react';
import './css/Projects.css';
import content from './content.json';

const projects = content.projects.info;

export function Projects () {
  return (
    <div className="projects-main-container">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.image} alt={`Project ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
