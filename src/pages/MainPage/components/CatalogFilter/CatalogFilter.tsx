import { CameraCategory } from '@main-page/components/CatalogFilter/components/CameraCategory';
import { CameraLevel } from '@main-page/components/CatalogFilter/components/CameraLevel';
import { CameraType } from '@main-page/components/CatalogFilter/components/CameraType';
import { PriceRange } from '@main-page/components/CatalogFilter/components/PriceRange';
import { CatalogFilterProps } from '@main-page/types/types';

export const CatalogFilter = ({ onChangeHandler, filter, onChangeResetHandler, setFilter }: CatalogFilterProps) => (
  <div
    className="catalog-filter"
    data-testid="catalog-filter"
  >
    <form action="#">
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceRange
        onChangeHandler={onChangeHandler}
        setFilter={setFilter}
        filter={filter}
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
        onClick={onChangeResetHandler}
      >
        Сбросить фильтры
      </button>
    </form>
  </div>
);
