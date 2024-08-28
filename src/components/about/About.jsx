import React, { useState } from 'react';
import Modal from './Modal';
import './css/About.css';

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
            <img src="/imgs/logo vg - 2023.webp" alt="Imagen descriptiva" className="about-image" />
          </div>
        </div>
        <div className="about-right-container">          
          <h2 className="name">Valeria Góngora Andrade</h2>
          <p className="email">v.gongoraandrade@gmail.com</p>
          <p className="text">Soy diseñadora con experiencia destacada en el uso de herramientas como Adobe Photoshop, Illustrator y Canva. Mi enfoque creativo se combina con habilidades técnicas sólidas para transformar ideas en piezas visuales impactantes. Disfruto colaborar en equipos, comunicándome de manera efectiva y aportando un enfoque positivo. Mi experiencia y habilidades blandas hacen de mí una opción sólida para contribuir a proyectos creativos.</p>
          {/* <button onClick={handleModalOpen} className="cv-button">Mi marca</button> */}
          <a href="documents/ValeriaGongoraAndrade_CV.pdf" download className="cv-button">Descarga mi CV</a>                    
        </div>
        
      </div>  

      <Modal 
        isVisible={isModalVisible} 
        onClose={handleModalClose}
        title="Mi Marca"
        description="Descripción de la marca de Valeria Góngora Andrade."
        image="/imgs/logo vg - 2023.webp"
      />    
    </div>
  );
}