import { useEffect } from 'react';

import { ButtonAddBasket } from '@app-ui/ButtonAddBasket';
import { ButtonCloseModal } from '@app-ui/ButtonCloseModal';
import { ButtonContinueShopping } from '@app-ui/ButtonContinueShopping';
import { ButtonRemoveBasket } from '@app-ui/ButtonRemoveBasket';

import { useAppSelector } from '@hooks/useAppSelector';

import { getModalTitle } from '@slice/modal/modal-selectors/modal-selectors';

import { changeCameraCategoryAdapter } from '@utils/functions/adapters/changeCameraCategoryAdapter';

import { modalController } from '@components/blocks/ModalComponent/helpers';
import { CatalogCallItemProps } from '@main-page/types/types';

export const CatalogCallItem = ({ props: activeCard }: CatalogCallItemProps) => {
  const { previewImgWebp, previewImgWebp2x, previewImg, previewImg2x, type, name, vendorCode, level, category, price } =
    activeCard;

  const cameraCategory = changeCameraCategoryAdapter(category);
  const title = useAppSelector(getModalTitle);

  useEffect(() => {
    modalController.addScrollLockBody();

    return () => modalController.removeScrollLockBody();
  }, []);
  return (
    <>
      <p className="title title--h4">{title}</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`}
            />
            <img
              src={`/${previewImg}`}
              srcSet={`/${previewImg2x}`}
              width="140"
              height="120"
              alt={name}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">
            {cameraCategory} {name}
          </p>
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
      <div className="modal__buttons">
        {title === modalController.addBasketTitle && (
          <ButtonAddBasket
            activeCard={activeCard}
            className={'modal__btn modal__btn--fit-width'}
          />
        )}

        {title === modalController.removeBasketTitle && (
          <>
            <ButtonRemoveBasket activeCard={activeCard} />
            <ButtonContinueShopping />
          </>
        )}

        <ButtonCloseModal />
      </div>
    </>
  );
};
