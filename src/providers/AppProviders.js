import React from 'react';
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

export default AppProviders;
