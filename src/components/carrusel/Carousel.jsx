import React from 'react';
import './css/Carousel.css';
import content from './content.json';
import images from './images.json';


export function Carousel() {
  const row1 = images.carousel.images;

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
                    console.error(`/${content.carousel.error}: /${imgPath}${filename}`);
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
                    console.error(`/${content.carousel.error}: /${imgPath}${filename}`);
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

