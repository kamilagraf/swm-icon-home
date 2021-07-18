import { useState } from 'react';

const useModal = () => {
  const [modalState, setModalState] = useState('close');

  const handleOpenModalIcon = () => setModalState('modal-icon');
  const handleOpenModalFilter = () => setModalState('modal-filter');
  const handleCloseModal = () => setModalState('close');

  return {
    modalState,
    handleOpenModalIcon,
    handleOpenModalFilter,
    handleCloseModal,
  };
};

export default useModal;
