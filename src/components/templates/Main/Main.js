import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Main.styles';
import FilterBar from 'components/organisms/FilterBar/FilterBar';
import IconGrid from 'components/organisms/IconGrid/IconGrid';

const Main = ({ handleOpen }) => {
  return (
    <Wrapper>
      <FilterBar />
      <IconGrid handleOpen={handleOpen} />
    </Wrapper>
  );
};

Main.propTypes = {
  handleOpen: PropTypes.func,
};

export default Main;
