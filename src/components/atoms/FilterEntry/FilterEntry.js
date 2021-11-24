import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FilterEntry.styles';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Check } from 'react-swm-icon-pack';
import { theme } from 'assets/styles/theme';

const FilterEntry = ({ children, isEnabled, isCategory, number, ...props }) => {
  return (
    <Wrapper isEnabled={isEnabled} {...props}>
      <Paragraph isLarge>{children}</Paragraph>
      {isEnabled && <Check color={theme.colors.primaryBlue.hundred} />}
      {!isEnabled && number && <Paragraph isLarge>{number}</Paragraph>}
    </Wrapper>
  );
};

FilterEntry.propTypes = {
  isEnabled: PropTypes.bool,
  isCategory: PropTypes.bool,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FilterEntry;
