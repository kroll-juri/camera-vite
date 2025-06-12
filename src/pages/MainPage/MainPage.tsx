import { BreadCrumbs } from '@components/blocks/BreadCrumbs';
import { TopSlider } from '@app-ui/TopSlider/TopSlider';

import { Catalog } from '@pages/MainPage/components/Catalog';

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
