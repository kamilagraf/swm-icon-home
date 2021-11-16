import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ modalState, handleClose, modalType, children }) => {
  return (
    <ModalWrapper
      shouldCloseOnOverlayClick={true}
      appElement={document.getElementById('root')}
      isOpen={modalState}
      onRequestClose={handleClose}
      style={{
        overlay: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: modalType === 'modal-filter' ? 'start' : 'center',
          alignItems: modalType === 'modal-filter' ? 'start' : 'center',
          backgroundColor: '#0002',
          zIndex: '5',
        },
        content: {
          outline: 'none',
          position: 'absolute',
        },
      }}
    >
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  modalState: PropTypes.bool,
  handleClose: PropTypes.func,
  modalType: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
