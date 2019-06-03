import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Forms } from '../';

function Modal({ closeModal }) {
  return ReactDOM.createPortal(
    <section className="modal-bg">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>+</button>
        <Forms />
      </div>
    </section>,
    document.getElementById('modal-root')
  )
}

export default Modal;