import React from 'react';
import { Wrapper } from './Main.styles';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import IconGrid from 'components/organisms/IconGrid/IconGrid';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import IconDetails from 'components/organisms/IconDetails/IconDetails';

const Main = () => {
  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <Modal modalState={modalState} handleClose={handleCloseModal} modalType="modal-icon">
        <IconDetails handleClose={handleCloseModal} />
      </Modal>
      <FilterBar />
      <IconGrid handleOpen={handleOpenModal} />
    </Wrapper>
  );
};

export default Main;
