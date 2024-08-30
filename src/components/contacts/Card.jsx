import React from 'react';
import './css/Card.css';
import content from './content.json';
import images from './images.json';

const Card = () => {
  return (
    <div className="card-container">
      <h2>{content.card.title}</h2>
      <button className="card-button">{content.card.labelbutton}</button>
      <div className="card-info">
        <img src={images.card.email} alt="Email" className="card-icon" />
        <p>{content.card.email}</p>
      </div>
      <div className="card-info">
        <img src={images.card.phone} alt="Phone" className="card-icon" />
        <p>{content.card.phone}</p>
      </div>
    </div>
  );
}

export default Card;
