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
  props: Review[];
  activeCard: Camera | null;
}

export interface ReviewItemProps {
  props: Review;
}

export type ReviewsCardListProps = Pick<Review, 'advantage' | 'disadvantage' | 'review'>;

export interface SimilarListProps {
  props: Camera[];
}

export interface ProductReviewInputProps {
  value: string;
  title: string;
  checked: boolean;
}

export enum ProductReviewInputRadioTitles {}

export const ProductReviewInputTextTitles = {
  name: {
    title: 'Ваше имя',
    placeholder: 'Введите ваше имя',
    errorMessage: 'Нужно указать имя',
  },
  plus: {
    title: 'Достоинства',
    placeholder: 'Основные преимущества товара',
    errorMessage: 'Нужно указать достоинства',
  },
  minus: {
    title: 'Недостатки',
    placeholder: 'Главные недостатки товара',
    errorMessage: 'Нужно указать недостатки',
  },
  comment: {
    title: 'Комментарий',
    placeholder: 'Поделитесь своим опытом покупки',
    errorMessage: 'Нужно добавить комментарий',
  },
} as const;

export interface ReviewFormData {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}
