import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';
import { theme } from 'assets/styles/theme';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Button = ({ children, Icon, isDisabled, isSecondary, ...props }) => {
  return (
    <StyledButton disabled={isDisabled} {...props} isSecondary={isSecondary}>
      <Paragraph isSecondary={isSecondary} isMedium>
        {children}
      </Paragraph>
      {Icon ? isSecondary ? <Icon color={theme.colors.primaryBlue.hundred} /> : <Icon color={theme.colors.shadesOfGray.zero} /> : null}
    </StyledButton>
  );
};

Button.propTypes = {
  Icon: PropTypes.object,
  isDisabled: PropTypes.bool,
  isSecondary: PropTypes.bool,
};

export default Button;
