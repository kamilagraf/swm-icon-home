import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledParagraph, Center, Content } from './IconTemplate.styles';
import { theme } from 'assets/styles/theme';

const IconTemplate = ({ Icon, name, isActive, ...props }) => {
  return (
    <Wrapper isActive={isActive} {...props}>
      <Content>
        <Center>
          {isActive ? <Icon color={theme.colors.shadesOfGray.zero} /> : <Icon color={theme.colors.primaryBlue.hundred} />}
          <StyledParagraph isLarge isActive={isActive}>
            {name}
          </StyledParagraph>
        </Center>
      </Content>
    </Wrapper>
  );
};

IconTemplate.propTypes = {
  Icon: PropTypes.object,
  name: PropTypes.string,
  isActive: PropTypes.bool,
};

export default memo(IconTemplate);
