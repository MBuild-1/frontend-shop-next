import { useState } from 'react';

export const useCategoryMap = provinces => {
  const [select, setSelect] = useState(provinces[0]);

  const handleClick = id => {
    const filterProvince = provinces.filter(item => {
      return item.id === id;
    });

    setSelect(filterProvince[0]);
  };

  return { select, handleClick };
};
