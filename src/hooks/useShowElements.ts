import { useState } from 'react';

export const useShowElements = <T>(showCount: number, showStep: number, elementsList: T[]) => {
  const [elementsShowCount, setElementsShowCount] = useState(showCount);
  const isElementsListLoaded = elementsList && elementsShowCount >= elementsList.length;

  const handleReviewShowClick = () => {
    setElementsShowCount((prevState) => prevState + showStep);
  };

  return { isElementsListLoaded, handleReviewShowClick, elementsShowCount };
};
