import { FormEvent } from 'react';

import { CameraCategory } from '@main-page/components/CatalogFilter/components/CameraCategory';
import { CameraLevel } from '@main-page/components/CatalogFilter/components/CameraLevel';
import { CameraType } from '@main-page/components/CatalogFilter/components/CameraType';
import { PriceRange } from '@main-page/components/CatalogFilter/components/PriceRange';
import { CatalogFilterProps } from '@main-page/types/types';

export const CatalogFilter = ({ onChangeHandler, filter, onChangeResetHandler, setFilter }: CatalogFilterProps) => {
  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeResetHandler();
  };
  return (
    <div
      className="catalog-filter"
      data-testid="catalog-filter"
    >
      <form onReset={handleReset}>
        <h2 className="visually-hidden">Фильтр</h2>

        <PriceRange
          onChangeHandler={onChangeHandler}
          filter={filter}
          setFilter={setFilter}
        />

        <CameraCategory
          onChangeHandler={onChangeHandler}
          filter={filter}
        />

        <CameraType
          onChangeHandler={onChangeHandler}
          filter={filter}
        />

        <CameraLevel
          onChangeHandler={onChangeHandler}
          filter={filter}
        />

        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
};
