import React from 'react';

import { IconSnowFlake } from '@app-ui/IconSnowFlake';

type ProductReviewTextInputProps = {
  handleInputValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  title: string;
  placeholder: string;
  errorMessage: string;
  error: boolean;
  value: string | number;
};

export const ProductReviewTextInput = ({
  handleInputValueChange,
  name,
  title,
  placeholder,
  errorMessage,
  error,
  value,
}: ProductReviewTextInputProps) => {
  return (
    <div className={`custom-input form-review__item ${error ? 'is-invalid' : ''}`}>
      <label>
        <span className="custom-input__label">
          {title}
          <IconSnowFlake />
        </span>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          required
          onChange={handleInputValueChange}
          value={value}
        />
      </label>
      {error && <p className="custom-input__error">{errorMessage}</p>}
    </div>
  );
};
