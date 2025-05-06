import { useLocation } from 'react-router-dom';

import {
  BreadCrumbsItemCurrent,
  BreadCrumbsItemLink,
} from '@components/blocks/BreadCrumbs/components/BreadCrumbsList/components/BreadCrumbsItem';

import { useAppSelector } from '@hooks/useAppSelector';

import { getCurrentCamera } from '@slice/camera/camera-selectors/camera-selectors';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const BreadCrumbsList = () => {
  const { pathname } = useLocation();

  const currentCamera = useAppSelector(getCurrentCamera);

  return (
    <ul className="breadcrumbs__list">
      <BreadCrumbsItemLink
        route={routeConfig.Index}
        title={'Главная'}
      />
      {pathname === routeConfig.Index && <BreadCrumbsItemCurrent name={'Каталог'} />}

      {pathname.includes(routeConfig.Basket) && (
        <>
          <BreadCrumbsItemLink
            route={routeConfig.Index}
            title={'Каталог'}
          />
          <BreadCrumbsItemCurrent name={'Корзина'} />
        </>
      )}

      {pathname.includes(routeConfig.Camera) && currentCamera && (
        <>
          <BreadCrumbsItemLink
            route={routeConfig.Index}
            title={'Каталог'}
          />
          <BreadCrumbsItemCurrent name={currentCamera.name} />
        </>
      )}
    </ul>
  );
};
