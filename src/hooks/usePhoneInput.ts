import { ChangeEvent, useEffect, useState } from 'react';

import { phoneNumberFormatAdapter } from '@utils/functions/adapters/phoneNumberFormatAdapter';
import { validatePhoneNumber } from '@utils/functions/common/validatePhoneNumber';

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

  const formattedPhoneNumber = phoneNumberFormatAdapter(inputValue);

  const handleClickSubmit = () => {
    console.log('Отправленные данные:', formattedPhoneNumber);
    setInputValue('');
  };

  return { inputValue, handleInputValueChange, handleClickSubmit, error };
};
