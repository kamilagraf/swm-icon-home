// import { useState } from 'react';

// const useModal = (initialState = false) => {
//   const [isOpen, setModalState] = useState(initialState);

//   const handleOpenModal = () => setModalState(true);
//   const handleCloseModal = () => setModalState(false);

//   return {
//     isOpen,
//     handleOpenModal,
//     handleCloseModal,
//   };
// };

// export default useModal;

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
