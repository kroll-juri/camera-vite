import { useAppSelector } from '@hooks/useAppSelector';
import { useSorting } from '@hooks/useSorting';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';

import { AsideBanner } from '@main-page/components/Catalog/components/AsideBanner';
import { CardList } from '@main-page/components/Catalog/components/CardList';
import { SortForm } from '@main-page/components/Catalog/components/SortForm';

export const Catalog = () => {
  const camerasList = useAppSelector(getCamerasList);
  const { handleTypeChange, handleOrderChange, sortParams, sortedCamerasList } = useSorting(camerasList);

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <AsideBanner />
          <div className="catalog__content">
            <SortForm
              sortParams={sortParams}
              handleOrderChange={handleOrderChange}
              handleTypeChange={handleTypeChange}
            />
            <CardList sortedCamerasList={sortedCamerasList} />
          </div>
        </div>
      </div>
    </section>
  );
};
