import React, { ChangeEvent, CSSProperties, useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Camera } from '@slice/camera/types/types';

export const useSearch = <T extends Camera>(list: T[]) => {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState<Camera[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const navigate = useNavigate();
  const handleInputValueChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (searchResults) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setCurrentIndex((prev) => Math.min(prev + 1, searchResults.length - 1));
          break;

        case 'ArrowUp':
          e.preventDefault();
          setCurrentIndex((prev) => Math.max(prev - 1, -1));
          break;

        case 'Escape':
          setSearchResults(null);
          setCurrentIndex(-1);
          inputRef.current?.blur();
          break;

        case 'Enter':
          navigate(`camera/${searchResults[currentIndex].id}`);
      }
    }
  };

  useEffect(() => {
    if (value.length > 2) {
      const filteredCameras = list.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(filteredCameras);
      setCurrentIndex(-1); // Сброс индекса при новом поиске
    } else {
      setSearchResults(null);
    }
  }, [value, list]);

  const listClassName = !searchResults ? '' : 'list-opened';
  const buttonResetVisibilityStyle: CSSProperties = value
    ? {
        display: 'block',
        opacity: 1,
      }
    : {};

  const handleClearInputButtonClick = () => {
    setValue('');
  };

  return {
    searchResults,
    listClassName,
    handleKeyDown,
    value,
    handleInputValueChange,
    inputRef,
    itemsRef,
    resultsRef,
    buttonResetVisibilityStyle,
    handleClearInputButtonClick,
  };
};
