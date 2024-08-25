import React from 'react';
import './css/Carrusel.css';

export function Carrusel() {
  const row1 = [
    "adobe-illustrator.png",
    "adobe-photoshop.png",
    "After-Effects.png",
    "InDesign.jpg",
    "Premiere-Pro.png",
  ];

  const imgPath = 'imgs/';

  return (
    <div className="AppContainer">
      <div className="Wrapper">
        <div className="Marquee">
          <div className="MarqueeGroup">
            {row1.map((filename, index) => (
              <figure className="ImageGroup" key={index}>
                <img 
                  className="Image" 
                  src={`/${imgPath}${filename}`} 
                  alt={`Image ${index + 1}`} 
                  onError={(e) => {
                    console.error(`Error loading image: /${imgPath}${filename}`);
                    e.target.style.display = 'none';
                  }}
                />
                <figcaption className="ImageCaption">{filename.split('.')[0]}</figcaption>
              </figure>
            ))}
          </div>
          <div className="MarqueeGroup">
            {row1.map((filename, index) => (
              <figure className="ImageGroup" key={index}>
                <img 
                  className="Image" 
                  src={`/${imgPath}${filename}`} 
                  alt={`Image ${index + 1}`} 
                  onError={(e) => {
                    console.error(`Error loading image: /${imgPath}${filename}`);
                    e.target.style.display = 'none'; 
                  }}
                />
                <figcaption className="ImageCaption">{filename.split('.')[0]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

