import React from 'react';
import { Wrapper } from './Root.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import AdditionalBar from 'components/organisms/AdditionalBar/AdditionalBar';
import Main from 'components/templates/Main/Main';

const Root = () => {
  return (
    <Wrapper>
      <Navigation />
      <AdditionalBar />
      <Main />
    </Wrapper>
  );
};

export default Root;
