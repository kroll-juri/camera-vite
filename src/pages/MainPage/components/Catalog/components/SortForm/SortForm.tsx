import { IconSort } from '@app-ui/IconSort';

import { SortFormProps } from '@main-page/types/types';

export const SortForm = ({ handleTypeChange, handleOrderChange, sortParams }: SortFormProps) => {
  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="sort"
                checked={sortParams.sortBy === 'price'}
                onChange={() => handleTypeChange('price')}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="sort"
                checked={sortParams.sortBy === 'popularity'}
                onChange={() => handleTypeChange('popularity')}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="up"
                name="sort-icon"
                checked={sortParams.order === 'increase'}
                onChange={() => handleOrderChange('increase')}
                aria-label="По возрастанию"
              />
              <label htmlFor="up">
                <IconSort />
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
                checked={sortParams.order === 'decrease'}
                onChange={() => handleOrderChange('decrease')}
              />
              <label htmlFor="down">
                <IconSort />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
