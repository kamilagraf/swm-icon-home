import React from 'react';
import { Wrapper, StyledSearchInput } from './SearchInput.styles';
import { Search, CrossCircle } from 'react-swm-icon-pack';
import { theme } from 'assets/styles/theme';
import { useSearch } from 'hooks/useSearch';

const SearchInput = () => {
  const { query, setQuery } = useSearch();

  return (
    <Wrapper>
      <Search color={theme.colors.primaryBlue.hundred} />
      <StyledSearchInput placeholder="Search for an icon..." value={query} onChange={({ currentTarget }) => setQuery(currentTarget.value)} />
      {query ? (
        <div className="btn-delete">
          <CrossCircle color={theme.colors.primaryBlue.hundred} onClick={() => setQuery('')} />{' '}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default SearchInput;
