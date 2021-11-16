import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FiltersGrid, Title } from './FilterBar.styles';
import { H1, H2 } from 'components/atoms/Headings/Headings';
import FilterEntry from 'components/atoms/FilterEntry/FilterEntry';
import { CrossCircle } from 'react-swm-icon-pack';
import { sets, categories, useIcons, categoriesCount } from 'hooks/useIcons';

const FilterBar = ({ handleClose, isOpen }) => {
  const { activeSet, setActiveSet, activeCategories, setActiveCategories } = useIcons();

  const toggleCategories = (category) => {
    if (activeCategories.includes(category)) {
      activeCategories.splice(activeCategories.indexOf(category), 1);
      setActiveCategories([...activeCategories]);
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };

  return (
    <Wrapper isOpen={isOpen}>
      <FiltersGrid>
        <Title>
          <H1>Filters</H1>
          <CrossCircle size={36} onClick={handleClose} />
        </Title>
        <H2>Icon styles</H2>
        {sets.length
          ? sets.map((set) => (
              <FilterEntry key={set} onClick={() => setActiveSet(set)} isEnabled={set === activeSet ? true : false}>
                {set}
              </FilterEntry>
            ))
          : null}
        <H2>Categories</H2>
        {categories.length
          ? categories.map((category) => (
              <FilterEntry
                number={categoriesCount[category]}
                key={category}
                onClick={() => toggleCategories(category)}
                isEnabled={activeCategories.includes(category) ? true : false}
                isCategory
              >
                {category}
              </FilterEntry>
            ))
          : null}
      </FiltersGrid>
    </Wrapper>
  );
};

FilterBar.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default FilterBar;
