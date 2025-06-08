import { BreadCrumbs } from '@components/blocks/BreadCrumbs';
import { TopBanner } from '@app-ui/TopBanner';

import { Catalog } from '@pages/MainPage/components/Catalog';

export const MainPage = () => {
  return (
    <>
      <TopBanner />
      <div className="page-content">
        <BreadCrumbs />
        <Catalog />
      </div>
    </>
  );
};
