import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { IconsProvider } from 'hooks/useIcons';
import { SearchProvider } from 'hooks/useSearch';

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <IconsProvider>
        <SearchProvider>
          <GlobalStyle />
          {children}
        </SearchProvider>
      </IconsProvider>
    </ThemeProvider>
  );
};

AppProviders.propTypes = {};

export default AppProviders;
