import { Link } from 'react-router-dom';

import { TopBannerProps } from '@app-ui/TopBanner/types/types';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const TopBanner = ({ props }: TopBannerProps) => {
  const { previewImg2x, previewImg, previewImgWebp, previewImgWebp2x, id: cameraId, name } = props;

  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`${previewImgWebp}, ${previewImgWebp2x}`}
        />
        <img
          src={previewImg}
          srcSet={previewImg2x}
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link
          className="btn"
          to={`${routeConfig.Camera}/${cameraId}`}
        >
          Подробнее
        </Link>
      </p>
    </div>
  );
};
