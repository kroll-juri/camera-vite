import { useState } from 'react';

import { CARDS_COUNT_SIMILAR_SLIDER, CARDS_COUNT_SIMILAR_STEP } from '@utils/const/const';

import { SliderState } from '@shared-types/types';

const initialState: SliderState = {
  start: 0,
  end: CARDS_COUNT_SIMILAR_SLIDER,
};

export const useSlider = <T>(list: T[]) => {
  const [showCardsCount, setShowCardsCount] = useState<SliderState>(initialState);

  const handleIncreaseClick = () => {
    setShowCardsCount((prevState) => ({
      ...prevState,
      start: prevState.start + CARDS_COUNT_SIMILAR_STEP,
      end: prevState.end + CARDS_COUNT_SIMILAR_STEP,
    }));
  };

  const handleDecreaseClick = () => {
    setShowCardsCount((prevState) => ({
      ...prevState,
      start: prevState.start - CARDS_COUNT_SIMILAR_STEP,
      end: prevState.end - CARDS_COUNT_SIMILAR_STEP,
    }));
  };

  const disabled = {
    prevDisabled: showCardsCount.start === 0,
    nextDisabled: showCardsCount.end >= list.length,
  };

  return { disabled, handleIncreaseClick, handleDecreaseClick, showCardsCount };
};
