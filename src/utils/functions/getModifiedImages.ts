import { imageURLAdapter } from '@utils/functions/imageURLAdapter';

export const getModifiedImages = (
  [previewImg, previewImg2x, previewImgWebp, previewImgWebp2x]: string[],
  modifier: string,
): string[] => {
  return [previewImg, previewImg2x, previewImgWebp, previewImgWebp2x].map((item) => imageURLAdapter(item, modifier));
};
