import React, { useState } from 'react';
import Modal from './Modal';
import './css/About.css';
import content from './content.json';
import images from './images.json';

export function About() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div className="about-main-container">
      <div className="about-container">
        <div className="about-left-container">   
          <div className="image-wrapper">      
            <img src={images.about.logo} alt="Imagen descriptiva" className="about-image" />
          </div>
        </div>
        <div className="about-right-container">          
          <h2 className="name">{content.about.name}</h2>
          <p className="email">{content.about.email}</p>
          <p className="text">{content.about.text}</p>
          {/* <button onClick={handleModalOpen} className="cv-button">{content.about.marca_button}</button> */}
          <a href={content.cv.link} download className="cv-button">{content.about.cv_button}</a>                    
        </div>
        
      </div>  

      <Modal 
        isVisible={isModalVisible} 
        onClose={handleModalClose}
        title={content.modal.title}
        description={content.modal.description}
        image={images.modal.logo}
      />    
    </div>
  );
}