import { CamerasCategory } from '@main-page/const/const';
import { CameraCategoryProps } from '@main-page/types/types';

export const CameraCategory = ({ filter, onChangeHandler }: CameraCategoryProps) => {
  return (
    <fieldset
      className="catalog-filter__block"
      data-testid="camera-category"
    >
      <legend className="title title--h5">Категория</legend>
      {Object.entries(CamerasCategory).map(([key, label]) => (
        <div
          className="custom-radio catalog-filter__item"
          key={key}
        >
          <label>
            <input
              type="radio"
              name="category"
              value={key}
              checked={filter.category === key}
              onChange={onChangeHandler}
            />
            <span className="custom-radio__icon" />
            <span className="custom-radio__label">{label}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};
