import { ChangeEvent } from 'react';

import { CamerasFilterGroups } from '@main-page/const/const';
import { FilterInputChangeHandler, FilterStateProps } from '@main-page/types/types';
import { EventHandler } from '@shared-types/types';

export const filterInputChangeHandler = (setFn: FilterInputChangeHandler): EventHandler =>
  function (evt: ChangeEvent<HTMLInputElement>): void {
    const { value, checked, dataset, type, name } = evt.target;

    if (type === 'radio') {
      setFn((prevState) => ({
        ...prevState,
        category: value,
      }));
    } else if (type === 'checkbox' && dataset.groupName === CamerasFilterGroups.type) {
      setFn(
        (prevState): FilterStateProps => ({
          ...prevState,
          type: checked ? [...prevState.type, value] : prevState.type.filter((item) => item !== value),
        }),
      );
    } else if (type === 'checkbox' && dataset.groupName === CamerasFilterGroups.level) {
      setFn((prevState) => ({
        ...prevState,
        level: checked ? [...prevState.level, value] : prevState.level.filter((item) => item !== value),
      }));
    } else if (name === 'price') {
      setFn((prevState) => ({
        ...prevState,
        priceFrom: value,
      }));
    } else if (name === 'priceUp') {
      setFn((prevState) => ({
        ...prevState,
        priceTo: value,
      }));
    }
  };
