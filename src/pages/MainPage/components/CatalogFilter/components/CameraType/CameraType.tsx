import { CamerasCategory, CamerasFilterGroups, CamerasType } from '@main-page/const/const';
import { CameraTypeProps } from '@main-page/types/types';

export const CameraType = ({ filter, onChangeHandler }: CameraTypeProps) => {
  const groupValue = CamerasFilterGroups.type;

  return (
    <fieldset
      className="catalog-filter__block"
      data-testid="camera-type"
    >
      <legend className="title title--h5">{groupValue}</legend>
      {(Object.entries(CamerasType) as Array<[keyof typeof CamerasType, string]>).map(([key, value]) => {
        const isDisabled = filter.category === CamerasCategory.videocamera && (key === 'film' || key === 'snapshot');
        return (
          <div
            className="custom-checkbox catalog-filter__item"
            key={key}
          >
            <label>
              <input
                type="checkbox"
                name="type"
                value={key}
                checked={!isDisabled && filter.type.includes(key)}
                onChange={onChangeHandler}
                data-group-name={groupValue}
                disabled={isDisabled}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">{value}</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};
