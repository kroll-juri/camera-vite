import { modalController } from '@components/blocks/ModalComponent/helpers';
import { IconClose } from '@app-ui/IconClose';

import { changeCameraCategoryAdapter } from '@utils/changeCameraCategoryAdapter';

import { PhoneItem } from '@main-page/components/Catalog/components/CatalogCallItem/components/PhoneItem';
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
      <PhoneItem />
      <button
        className="cross-btn"
        type="button"
        aria-label="Закрыть попап"
        onClick={() => modalController.handleChangeModalState(setModalState, false)}
      >
        <IconClose />
      </button>
    </>
  );
};
