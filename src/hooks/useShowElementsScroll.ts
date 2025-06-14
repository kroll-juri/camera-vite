import { useCallback, useRef } from 'react';

import { useShowElements } from '@hooks/useShowElements';

import { REVIEWS_SHOW_COUNT_STEP, START_REVIEWS_SHOW_COUNT } from '@utils/const/const';

export const useShowElementsScroll = <T>(list: T[]) => {
  const { isElementsListLoaded, handleReviewShowClick, elementsShowCount } = useShowElements(
    START_REVIEWS_SHOW_COUNT,
    REVIEWS_SHOW_COUNT_STEP,
    list,
  );
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastReviewRef = useRef<HTMLLIElement | null>(null);

  const setLastReviewRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();

      if (node && !isElementsListLoaded) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              handleReviewShowClick();
            }
          },
          {
            rootMargin: '100px',
          },
        );

        observerRef.current.observe(node);
      }

      lastReviewRef.current = node;
    },
    [handleReviewShowClick, isElementsListLoaded],
  );

  return {
    setLastReviewRef,
    elementsShowCount,
    isElementsListLoaded,
    handleReviewShowClick,
  };
};
