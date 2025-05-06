import { TopSlider } from '@app-ui/TopSlider/TopSlider';

import { Catalog } from '@pages/MainPage/components/Catalog';

import { BreadCrumbs } from '@components/blocks/BreadCrumbs';

export const MainPage = () => {
  return (
    <>
      <TopSlider />
      <div className="page-content">
        <BreadCrumbs />
        <Catalog />
      </div>
    </>
  );
};
