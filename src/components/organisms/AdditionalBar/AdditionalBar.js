import React from 'react';
import { Wrapper } from './AdditionalBar.styles';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Button from 'components/atoms/Button/Button';
import { Filters2 } from 'react-swm-icon-pack';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';

const AdditionalBar = () => {
  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <Modal modalState={modalState} handleClose={handleCloseModal} modalType="modal-filter">
        <FilterBar handleClose={handleCloseModal} isOpen={modalState} />
      </Modal>
      <SearchInput />
      <Button Icon={Filters2} onClick={handleOpenModal}>
        Filters
      </Button>
    </Wrapper>
  );
};

export default AdditionalBar;
