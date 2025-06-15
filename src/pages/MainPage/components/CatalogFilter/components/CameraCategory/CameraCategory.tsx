import { CamerasCategory } from '@main-page/const/const';
import { CameraCategoryProps } from '@main-page/types/types';

export const CameraCategory = ({ onChangeHandler, filter }: CameraCategoryProps) => (
  <fieldset
    className="catalog-filter__block"
    data-testid="camera-category"
  >
    <legend className="title title&#45;&#45;h5">Категория</legend>

    {(Object.entries(CamerasCategory) as Array<[keyof typeof CamerasCategory, string]>).map(([key, value]) => (
      <div
        className="custom-radio catalog-filter__item"
        key={key}
      >
        <label>
          <input
            type="radio"
            name="category"
            value={key}
            checked={filter.category === CamerasCategory[key]}
            onChange={onChangeHandler}
          />
          <span className="custom-radio__icon"></span>
          <span className="custom-radio__label">{value}</span>
        </label>
      </div>
    ))}
  </fieldset>
);
