import React from 'react';
import { Wrapper, LogoWrapper, SearchWrapper } from './Navigation.styles';
import { H1 } from 'components/atoms/Headings/Headings';
import { ReactComponent as SWMLogo } from 'assets/icons/swm-logo.svg';
import SearchInput from 'components/atoms/SearchInput/SearchInput';
import Button from 'components/atoms/Button/Button';
import { ArrowCircleRight } from 'react-swm-icon-pack';

const Navigation = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <SWMLogo className="logo" />
        <H1>Icon Pack</H1>
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput />
        <Button Icon={ArrowCircleRight} as="a" href="https://www.npmjs.com/package/react-swm-icon-pack" rel="noopener" target="_blank">
          Check on npm
        </Button>
      </SearchWrapper>
    </Wrapper>
  );
};

export default Navigation;
