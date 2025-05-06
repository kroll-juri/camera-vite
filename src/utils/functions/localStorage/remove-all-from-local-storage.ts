import { CAMERA_CART_LOCALSTORAGE_KEY } from '@utils/const/const';

export const removeAllFromLocalStorage = <
  T extends {
    id: number;
  },
>(
  currentActiveCard: T,
): T[] => {
  const key = CAMERA_CART_LOCALSTORAGE_KEY;
  const getFromStorageResult = localStorage.getItem(key);
  const data: T[] = getFromStorageResult !== null ? (JSON.parse(getFromStorageResult) as T[]) : [];

  // Фильтруем массив, удаляя элемент по id
  const updatedData = data.filter((item) => item.id !== currentActiveCard.id);

  // Обновляем localStorage
  localStorage.setItem(key, JSON.stringify(updatedData));

  return updatedData;
};
