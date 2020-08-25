import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './Modal.scss';

const Modal = ({ children, show = false, closeModal = () => false }) => {
  return ReactDOM.createPortal(
    <div className={`modal ${show ? 'modal--show' : ''}`}>
      <div className='modal__background' onClick={closeModal}></div>
      <div className={`box-shadow--md modal__content ${show ? 'modal__content--show' : ''}`}>{children}</div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
