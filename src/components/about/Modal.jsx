import React from 'react';
import './css/Modal.css';
import content from './content.json';


const Modal = ({ isVisible, onClose, title, description, image }) => {
    if (!isVisible) {
        return null;
    }
    
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h1>{title}</h1>
                {image && <img src={image} alt={title} className="modal-image" />}                
                <p>{description}</p>
                <button onClick={onClose}>{content.modal.labelbutton}</button>
            </div>
        </div>
    );
};

export default Modal;
