import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './Modal.scss';

const Modal = ({
  children,
  show = false,
  closeModal = () => false,
  fullWidth = false,
  closeBtn = false,
  AutoWidth = false,
}) => {
  return ReactDOM.createPortal(
    <div
      className={`modal ${
        show ? 'modal--show' : ''
      }`}>
      <div
        className='modal__background'
        onClick={closeModal}></div>
      {closeBtn && (
        <button
          className='modal__close'
          onClick={closeModal}>
          <i className='fal fa-times-circle modal__close__icon'></i>
        </button>
      )}

      <div
        className={`box-shadow--md modal__content ${
          show ? 'modal__content--show' : ''
        } ${
          fullWidth ? 'modal__content--full' : ''
        } ${
          AutoWidth ? 'modal__content--auto' : ''
        }`}>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
