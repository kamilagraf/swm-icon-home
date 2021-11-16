import { useState } from 'react';

const useModal = (initialState = false) => {
  const [modalState, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    modalState,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
