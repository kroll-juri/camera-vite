import { ChangeEvent } from 'react';

import { ProductReviewInputProps } from '@product-page/types/types';

export const ProductReviewRatingInput = ({
  value,
  title,
  checked,
  onChange,
}: ProductReviewInputProps & {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputId = `star-${value}`;

  return (
    <>
      <input
        className="visually-hidden"
        id={inputId}
        name="rating"
        type="radio"
        value={+value}
        checked={checked}
        onChange={onChange}
      />
      <label
        className="rate__label"
        htmlFor={inputId}
        title={title}
      ></label>
    </>
  );
};
