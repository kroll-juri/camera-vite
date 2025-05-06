import { Link } from 'react-router-dom';

import { ButtonBasket } from '@app-ui/ButtonBasket/ButtonBasket';
import { ButtonBuy } from '@app-ui/ButtonBuy';
import { StarsComponent } from '@app-ui/StarsComponent/StarsComponent';

import { useAppSelector } from '@hooks/useAppSelector';

import { getBasketCameraList } from '@slice/basket/basket-selectors/basket-selectors';

import { getModifiedImages } from '@utils/functions/adapters/getModifiedImages';
import { routeConfig } from '@app/AppRouter/routeConfig';

import { CardItemProps } from '@main-page/types/types';

export const CardItem = ({ props, className, urlModifier }: CardItemProps) => {
  const {
    name,
    price,
    rating,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x,
    reviewCount,
    id: cameraId,
  } = props;

  const [img, img2x, imgWebp, imgWebp2x] = getModifiedImages(
    [previewImg, previewImg2x, previewImgWebp, previewImgWebp2x],
    urlModifier,
  );
  const basketCameraList = useAppSelector(getBasketCameraList);

  const isCameraInBasket = basketCameraList.findIndex((camera) => camera.id === cameraId) !== -1;

  return (
    <div className={`product-card ${className}`}>
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`${imgWebp}, ${imgWebp2x}`}
          />
          <img
            src={img}
            srcSet={img2x}
            width="280"
            height="240"
            alt={name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <StarsComponent rating={rating} />
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>
            {reviewCount}
          </p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {isCameraInBasket ? <ButtonBasket /> : <ButtonBuy cameraId={cameraId} />}
        <Link
          className="btn btn--transparent"
          to={`${routeConfig.Camera}/${cameraId}`}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};
