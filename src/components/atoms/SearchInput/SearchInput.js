import React, { useRef } from 'react';
import debounce from 'lodash.debounce';
import { Wrapper, StyledSearchInput } from './SearchInput.styles';
import { Search, CrossCircle } from 'react-swm-icon-pack';
import { theme } from 'assets/styles/theme';
import { useSearch } from 'hooks/useSearch';

const SearchInput = () => {
  const { query, setQuery } = useSearch();
  const inputRef = useRef(null);

  const changeHandler = (value) => {
    setQuery(value);
  };

  const clearHandler = () => {
    setQuery('');
    inputRef.current.value = '';
  };

  const debouncedChangeHandler = debounce((value) => changeHandler(value), 500);

  return (
    <Wrapper>
      <Search color={theme.colors.primaryBlue.hundred} />
      <StyledSearchInput
        placeholder="Search for an icon..."
        ref={inputRef}
        onChange={({ currentTarget }) => debouncedChangeHandler(currentTarget.value)}
      />
      {query ? (
        <div className="btn-delete">
          <CrossCircle color={theme.colors.primaryBlue.hundred} onClick={clearHandler} />{' '}
        </div>
      ) : null}
    </Wrapper>
  );
};

export default SearchInput;

// return (
//   <Wrapper>
//     <Search color={theme.colors.primaryBlue.hundred} />
//     <StyledSearchInput
//       placeholder="Search for an icon..."
//       value={query}
//       onChange={({ currentTarget }) => setQuery(currentTarget.value)}
//     />
//     {query ? (
//       <div className="btn-delete">
//         <CrossCircle color={theme.colors.primaryBlue.hundred} onClick={() => setQuery('')} />{' '}
//       </div>
//     ) : null}
//   </Wrapper>
// );
