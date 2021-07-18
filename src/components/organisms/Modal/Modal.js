import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './Modal.styles';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import IconDetails from 'components/organisms/IconDetails/IconDetails';

const Modal = ({ modalState, handleClose }) => {
  return (
    <ModalWrapper
      shouldCloseOnOverlayClick={true}
      appElement={document.getElementById('root')}
      isOpen={modalState !== 'close'}
      onRequestClose={handleClose}
      style={{
        overlay: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: modalState === 'modal-filter' ? 'start' : 'center',
          alignItems: modalState === 'modal-filter' ? 'start' : 'center',
          backgroundColor: '#0002',
          zIndex: '5',
        },
        content: {
          outline: 'none',
          position: 'absolute',
        },
      }}
    >
      {modalState === 'modal-filter' ? (
        <FilterBar handleClose={handleClose} isOpen={modalState === 'modal-filter'} />
      ) : (
        <IconDetails handleClose={handleClose} />
      )}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  modalState: PropTypes.string,
  handleClose: PropTypes.func,
};

export default Modal;
