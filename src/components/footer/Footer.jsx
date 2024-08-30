import React from 'react';
import './css/Footer.css';
import content from './content.json';

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>{content.footer.title}</p>
          <p>{content.footer.description}</p>
          <p>{content.footer.powered}</p>
        </div>
      </div>
    </div>
  );
}
