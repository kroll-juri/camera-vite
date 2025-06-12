import { CameraCategory } from '@slice/camera/types/types';

export const changeCameraCategoryAdapter = (value: CameraCategory) => {
  if (value === 'Фотоаппарат') {
    return 'Фотокамера';
  }

  return value;
};
