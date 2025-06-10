import { modalController } from '@components/blocks/ModalComponent/helpers';

import { changeCameraCategoryAdapter } from '@utils/changeCameraCategoryAdapter';

import { CatalogCallItemProps } from '@main-page/types/types';

export const CatalogCallItem = ({ props, setModalState }: CatalogCallItemProps) => {
  const { previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, type, name, vendorCode, level, category, price } =
    props;

  const cameraCategory = changeCameraCategoryAdapter(category);

  return (
    <>
      <p className="title title--h4">Свяжитесь со мной</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`${previewImgWebp}, ${previewImgWebp2x}`}
            />
            <img
              src={previewImg}
              srcSet={previewImg2x}
              width="140"
              height="120"
              alt={name}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул:</span>
              <span className="basket-item__number">{vendorCode}</span>
            </li>
            <li className="basket-item__list-item">
              {type} {cameraCategory}
            </li>
            <li className="basket-item__list-item">{level} уровень</li>
          </ul>
          <p className="basket-item__price">
            <span className="visually-hidden">Цена:</span>
            {price} ₽
          </p>
        </div>
      </div>
      <div className="custom-input form-review__item">
        <label>
          <span className="custom-input__label">
            Телефон
            <svg
              width="9"
              height="9"
              aria-hidden="true"
            >
              <use xlinkHref="#icon-snowflake" />
            </svg>
          </span>
          <input
            type="tel"
            name="user-tel"
            placeholder="Введите ваш номер"
            required
          />
        </label>
        <p className="custom-input__error">Нужно указать номер</p>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
        >
          <svg
            width="24"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-add-basket" />
          </svg>
          Заказать
        </button>
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={() => modalController.handleChangeModalState(setModalState, false)}
      >
        <svg
          width="10"
          height="10"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </>
  );
};
