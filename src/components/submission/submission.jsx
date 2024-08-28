import React from 'react';
import './css/submission.css';

export function Submission() {
  
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="left-top"></div> {/* Opcional: puedes usar esto para otros propósitos */}
        <div className="left-bottom">
          <h1 className="left-title">Diseñadora Grafica</h1>
          <p className="left-text">Valeria Góngora Andrade</p>
        </div>
      </div>
      <div className="right-container">
        <div className="grid-container">
          {Array(12).fill().map((_, i) => (
            <div key={i} className="grid-item">
              {i + 1 === 4 || i + 1 === 9 || i + 1 === 10 ? (
                <img 
                  src={`/imgs/imagen${i + 1}.jpg`}  
                  alt={`Imagen ${i + 1}`} 
                  className="grid-img" 
                />
              ) : (
                ``
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}