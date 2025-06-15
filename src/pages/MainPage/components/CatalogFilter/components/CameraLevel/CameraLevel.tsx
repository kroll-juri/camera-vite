import { CamerasFilterGroups, CamerasLevel } from '@main-page/const/const';
import { CameraLevelProps } from '@main-page/types/types';

export const CameraLevel = ({ filter, onChangeHandler }: CameraLevelProps) => {
  const groupValue = CamerasFilterGroups.level;

  return (
    <fieldset
      className="catalog-filter__block"
      data-testid="camera-level"
    >
      <legend className="title title--h5">{groupValue}</legend>
      {(Object.entries(CamerasLevel) as Array<[keyof typeof CamerasLevel, string]>).map(([key, value]) => (
        <div
          className="custom-checkbox catalog-filter__item"
          key={key}
        >
          <label>
            <input
              type="checkbox"
              name="level"
              value={key}
              checked={filter.level.includes(key)}
              onChange={onChangeHandler}
              data-group-name={groupValue}
            />
            <span className="custom-checkbox__icon" />
            <span className="custom-checkbox__label">{value}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};
