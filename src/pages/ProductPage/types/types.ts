import { ButtonHTMLAttributes } from 'react';

import { Camera } from '@slice/camera/types/types';
import { Review } from '@slice/review/types/types';

export interface ProductPageProps {
  props: Camera;
}

export interface CameraSpecsProps {
  props: Partial<Camera>;
}

export interface TabsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export type ProductTabs = 'characteristics' | 'description';

export interface ReviewListProps {
  reviewsList: Review[];
}

export interface ReviewItemProps {
  props: Review;
}

export type ReviewsCardListProps = Pick<Review, 'advantage' | 'disadvantage' | 'review'>;

export enum ReviewCardListTitles {
  advantage = 'Достоинства',
  disadvantage = 'Недостатки',
  review = 'Отзыв',
}
