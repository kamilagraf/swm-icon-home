import React, { useState, useContext } from 'react';
import { icons } from 'assets/icons/icons';

export const sets = ['Outline', 'Broken', 'Duotone', 'Twocolor', 'Curved'];
export const categories = ['Arrows', 'Basic actions', 'Essentials', 'Audio, video', 'Low pro actions', 'Random', 'Messages', 'Weather', 'Med'];

export const categoriesCount = icons.reduce((acc, cur) => {
  acc[cur.category] = (acc[cur.category] || 0) + 1;
  return acc;
}, {});

const IconsContext = React.createContext({});

export const IconsProvider = ({ children }) => {
  const [activeSet, setActiveSet] = useState(sets[0]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeIcon, setActiveIcon] = useState();

  return (
    <IconsContext.Provider value={{ activeSet, setActiveSet, activeCategories, setActiveCategories, activeIcon, setActiveIcon }}>
      {children}
    </IconsContext.Provider>
  );
};

export const useIcons = () => {
  const icons = useContext(IconsContext);

  if (!icons) {
    throw Error('useIcons needs to be used inside SetContext');
  }

  return icons;
};
