import { Link } from 'react-router-dom';

import { StarsComponent } from '@app-ui/StarsComponent/StarsComponent';

import { getModifiedImages } from '@utils/functions/getModifiedImages';
import { routeConfig } from '@app/AppRouter/routeConfig';

import { CardItemProps } from '@main-page/types/types';

export const CardItem = ({ props, onActiveCardHandler, setModalState, className, urlModifier }: CardItemProps) => {
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

  console.log(cameraId);

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
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={() => {
            onActiveCardHandler(cameraId);
            setModalState(true);
          }}
        >
          Купить
        </button>
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
