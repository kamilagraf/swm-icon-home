import React from 'react';
import { Wrapper } from './Root.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import AdditionalBar from 'components/organisms/AdditionalBar/AdditionalBar';
import Main from 'components/templates/Main/Main';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';

const Root = () => {
  const { modalState, handleOpenModalFilter, handleOpenModalIcon, handleCloseModal } = useModal();

  return (
    <Wrapper>
      <Navigation />
      <AdditionalBar handleOpen={handleOpenModalFilter} />
      <Modal modalState={modalState} handleClose={handleCloseModal} />
      <Main handleOpen={handleOpenModalIcon} />
    </Wrapper>
  );
};

export default Root;
