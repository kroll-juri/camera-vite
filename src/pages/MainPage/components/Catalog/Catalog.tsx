import { useEffect } from 'react';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useFilter } from '@hooks/useFilter';
import { usePagination } from '@hooks/usePagination';
import { useSorting } from '@hooks/useSorting';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';
import { setActualCamera } from '@slice/camera/camera-slice/camera-slice';

import { getFilteredList } from '@utils/functions/getFilteredList';

import { CardList } from '@main-page/components/Catalog/components/CardList';
import { Pagination } from '@main-page/components/Catalog/components/Pagination';
import { SortForm } from '@main-page/components/Catalog/components/SortForm';
import { CatalogFilter } from '@main-page/components/CatalogFilter';
import { MAX_AMOUNT_SHOWED_CARDS } from '@main-page/const/const';

export const Catalog = () => {
  const dispatch = useAppDispatch();
  const camerasList = useAppSelector(getCamerasList);
  const { handleTypeChange, handleOrderChange, sortParams, sortedCamerasList } = useSorting(camerasList);
  const { filter, setFilter, handleFilterInputChange, handleFilterResetChange } = useFilter();
  const { page, sliceShowInitialRange, handleShowNewCardsClick } = usePagination();

  const sortedAndFilteredCamerasList = getFilteredList(sortedCamerasList, filter);

  const showedCamerasList = sortedAndFilteredCamerasList.slice(
    sliceShowInitialRange.showMin,
    sliceShowInitialRange.showMax,
  );

  const isShowPagination = sortedAndFilteredCamerasList.length >= MAX_AMOUNT_SHOWED_CARDS;

  const maxAmountPages = Math.ceil(sortedAndFilteredCamerasList.length / MAX_AMOUNT_SHOWED_CARDS);

  useEffect(() => {
    dispatch(setActualCamera(sortedAndFilteredCamerasList));
  }, [dispatch, sortedAndFilteredCamerasList]);

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <CatalogFilter
            filter={filter}
            setFilter={setFilter}
            onChangeHandler={handleFilterInputChange}
            onChangeResetHandler={handleFilterResetChange}
          />
          <div className="catalog__content">
            <SortForm
              sortParams={sortParams}
              handleOrderChange={handleOrderChange}
              handleTypeChange={handleTypeChange}
            />
            <CardList sortedCamerasList={showedCamerasList} />
            {isShowPagination && (
              <Pagination
                maxAmount={maxAmountPages}
                page={page}
                onClickHandler={handleShowNewCardsClick}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
