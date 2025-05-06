import { IconAddBasket } from '@app-ui/IconAddBasket';
import { IconSnowFlake } from '@app-ui/IconSnowFlake';

import { usePhoneInput } from '@hooks/usePhoneInput';

export const PhoneItem = () => {
  const { inputValue, handleInputValueChange, handleClickSubmit, error } = usePhoneInput();

  return (
    <>
      <div className={`custom-input form-review__item ${error ? 'is-invalid' : ''}`}>
        <label>
          <span className="custom-input__label">
            Телефон
            <IconSnowFlake />
          </span>
          <input
            type="tel"
            name="user-tel"
            placeholder="Введите ваш номер"
            value={inputValue}
            required
            onChange={handleInputValueChange}
          />
        </label>
        {error && <p className="custom-input__error">{error}</p>}
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleClickSubmit}
          disabled={error !== null}
        >
          <IconAddBasket />
          Заказать
        </button>
      </div>
    </>
  );
};
