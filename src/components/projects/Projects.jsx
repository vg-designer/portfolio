import React from 'react';
import './css/Projects.css';

const projects = [
  {
    image: '/imgs/logo bellota - 2024.webp',
    title: 'Product Title 1',
    description: 'This is a description of the product 3.',
  },
  {
    image: '/imgs/logo chicago - 2024.webp',
    title: 'Product Title 3',
    description: 'This is a description of the product 3.',
  },
  {
    image: '/imgs/logo vg - 2023.webp',
    title: 'Product Title 2',
    description: 'This is a description of the product 2.',
  },
  {
    image: '/imgs/logo hillary - 2024.webp',
    title: 'Product Title 4',
    description: 'This is a description of the product 3.',
  },
  {
    image: '/imgs/logo jewel essence - 2024.webp',
    title: 'Product Title 5',
    description: 'This is a description of the product 3.',
  },
  // Agrega más proyectos según sea necesario
];

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
