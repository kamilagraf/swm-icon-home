import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { icons } from 'assets/icons/icons';
import { useIcons } from 'hooks/useIcons';

const SearchContext = React.createContext({});

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState(icons);
  const [query, setQuery] = useState('');
  const { activeCategories } = useIcons();

  const fuse = new Fuse(icons, {
    keys: ['name', 'tags', 'category'],
    useExtendedSearch: true,
    threshold: 0.2,
  });

  useEffect(() => {
    query.trim() ? setResults(fuse.search(query.trim())) : setResults(icons);
  }, [query]);

  useEffect(() => {
    activeCategories.length ? setResults(icons.filter((item) => activeCategories.includes(item.category))) : setResults(icons);
  }, [activeCategories]);

  return <SearchContext.Provider value={{ query, setQuery, results }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const search = useContext(SearchContext);

  if (!search) {
    throw Error('useSearch needs to be used inside SearchContext');
  }

  return search;
};
