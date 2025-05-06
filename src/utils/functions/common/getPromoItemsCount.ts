import { Camera } from '@slice/camera/types/types';

export const getPromoItemsCount = (basket: Camera[], promo: { id: number }[]): number => {
  const promoIds = new Set(promo.map((item) => item.id));
  return basket.filter((item) => promoIds.has(item.id)).length;
};
