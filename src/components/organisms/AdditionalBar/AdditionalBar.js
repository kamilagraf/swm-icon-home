import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AdditionalBar.styles';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Button from 'components/atoms/Button/Button';
import { Filters2 } from 'react-swm-icon-pack';

const AdditionalBar = ({ handleOpen }) => {
  return (
    <Wrapper>
      <SearchInput />
      <Button Icon={Filters2} onClick={handleOpen}>
        Filters
      </Button>
    </Wrapper>
  );
};

AdditionalBar.propTypes = {
  handleOpen: PropTypes.func,
};

export default AdditionalBar;
