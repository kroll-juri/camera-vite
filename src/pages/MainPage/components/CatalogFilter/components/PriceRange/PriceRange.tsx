import { ChangeEvent } from 'react';

import { useAppSelector } from '@hooks/useAppSelector';

import { getActualCamera, getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';

import { getSortedList } from '@utils/functions/common/getSortedList';

import { PLACEHOLDER_HIGH_DEFAULT, PLACEHOLDER_LOW_DEFAULT } from '@main-page/const/const';
import { PriceRangeProps } from '@main-page/types/types';

export const PriceRange = ({ filter, onChangeHandler, setFilter }: PriceRangeProps) => {
  // Получаем данные из стора
  const cameraListData = useAppSelector(getCamerasList);
  const actualCamerasList = useAppSelector(getActualCamera);

  // Сортируем актуальный список камер по цене
  const sortedActualCamerasList = getSortedList([...actualCamerasList], (a, b) => a.price - b.price);

  // Длины списков
  const dataLength = cameraListData.length;
  const sortedLength = sortedActualCamerasList.length;

  const placeholderLow =
    sortedActualCamerasList[0]?.price.toString() || cameraListData[0]?.price.toString() || PLACEHOLDER_LOW_DEFAULT;

  const placeholderHigh =
    sortedActualCamerasList[sortedLength - 1]?.price.toString() ||
    cameraListData[dataLength - 1]?.price.toString() ||
    PLACEHOLDER_HIGH_DEFAULT;

  // Проверка значения при уходе с инпута (onBlur)
  const checkPriceInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
    const val = evt.target.value;
    const valNum = Number(val);

    if (evt.target.name === 'priceFrom') {
      // Если пустое или меньше минимального — ставим минимум
      if (!val || valNum < Number(placeholderLow)) {
        setFilter((prev) => ({ ...prev, priceFrom: placeholderLow }));
      }
      // Если priceTo меньше priceFrom — корректируем priceTo
      else if (filter.priceTo && Number(filter.priceTo) < valNum) {
        setFilter((prev) => ({ ...prev, priceTo: placeholderHigh }));
      }
    } else if (evt.target.name === 'priceTo') {
      // Если пустое или больше максимального — ставим максимум
      if (!val || valNum > Number(placeholderHigh)) {
        setFilter((prev) => ({ ...prev, priceTo: placeholderHigh }));
      }
      // Если priceTo меньше priceFrom — корректируем priceTo
      else if (filter.priceFrom && valNum < Number(filter.priceFrom)) {
        setFilter((prev) => ({ ...prev, priceTo: placeholderHigh }));
      }
    }
  };

  return (
    <fieldset
      className="catalog-filter__block"
      data-testid="price-range"
    >
      <legend className="title title--h5">Цена</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <span>От</span>
            <input
              type="number"
              name="priceFrom"
              value={filter.priceFrom}
              placeholder={placeholderLow}
              onChange={onChangeHandler}
              onBlur={checkPriceInputValue}
              min={0}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <span>До</span>
            <input
              type="number"
              name="priceTo"
              value={filter.priceTo}
              placeholder={placeholderHigh}
              onChange={onChangeHandler}
              onBlur={checkPriceInputValue}
              min={0}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
