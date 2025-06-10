import { ChangeEvent, useEffect,useState } from 'react';

import { validatePhoneNumber } from '@utils/validatePhoneNumber';

export const usePhoneInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const errorMessage = validatePhoneNumber(inputValue);
    setError(errorMessage || null);
  }, [inputValue]);

  const handleInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClickSubmit = () => {
    console.log('Отправленные данные:', inputValue);
    setInputValue('');
  };

  return { inputValue, handleInputValueChange, handleClickSubmit, error };
};
