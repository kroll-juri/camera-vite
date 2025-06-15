import { CamerasCategory } from '@slice/camera/types/types';

export const changeCameraCategoryAdapter = (value: CamerasCategory) => {
  if (value === 'Фотоаппарат') {
    return 'Фотокамера';
  }

  return value;
};
