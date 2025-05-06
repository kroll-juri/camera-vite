import { ChangeEvent, FormEvent } from 'react';

import { ButtonCloseModal } from '@app-ui/ButtonCloseModal';
import { IconSnowFlake } from '@app-ui/IconSnowFlake';

import { ProductReviewRatingInput } from './components/ProductReviewRatingInput';
import { ProductReviewTextInput } from './components/ProductReviewTextInput';

import { ProductReviewInputRadioTitles, ProductReviewInputTextTitles, ReviewFormData } from '@product-page/types/types';

type ProductReviewModalProps = {
  inputValue: ReviewFormData;
  handleInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (event: FormEvent) => void;
  errors: Record<string, boolean>;
};

const fieldNameMapping: Record<string, keyof ReviewFormData> = {
  name: 'userName',
  plus: 'advantage',
  minus: 'disadvantage',
  comment: 'review',
};

export const ProductReviewModal = ({
  inputValue,
  handleInputValueChange,
  handleFormSubmit,
  errors,
}: ProductReviewModalProps) => {
  return (
    <>
      <p className="title title--h4">Оставить отзыв</p>
      <form
        onSubmit={handleFormSubmit}
        className="form-review"
      >
        <div className="form-review__rate">
          <fieldset className="rate form-review__item">
            <legend className="rate__caption">
              Рейтинг
              <IconSnowFlake />
            </legend>
            <div className="rate__bar">
              <div className="rate__group">
                {Object.entries(ProductReviewInputRadioTitles).map(([title, value]) => (
                  <ProductReviewRatingInput
                    key={value}
                    title={title}
                    value={value}
                    checked={Number(value) === inputValue.rating}
                    onChange={handleInputValueChange}
                  />
                ))}
              </div>
              <div className="rate__progress">
                <span className="rate__stars">{inputValue.rating}</span>/<span className="rate__all-stars">5</span>
              </div>
            </div>
            <p className="rate__message">Нужно оценить товар</p>
          </fieldset>

          {Object.entries(ProductReviewInputTextTitles).map(([key, { title, placeholder, errorMessage }]) => {
            const fieldName = fieldNameMapping[key];
            return (
              <ProductReviewTextInput
                key={fieldName}
                handleInputValueChange={handleInputValueChange}
                name={fieldName}
                title={title}
                placeholder={placeholder}
                errorMessage={errorMessage}
                error={!!errors[fieldName]}
                value={inputValue[fieldName]}
              />
            );
          })}
        </div>

        <button
          className="btn btn--purple form-review__btn"
          type="submit"
        >
          Отправить отзыв
        </button>
      </form>
      <ButtonCloseModal />
    </>
  );
};
