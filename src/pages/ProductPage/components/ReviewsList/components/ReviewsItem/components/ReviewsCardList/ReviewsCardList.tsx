import { ReviewsCardListProps } from '@product-page/types/types';

export const ReviewsCardList = ({ advantage, disadvantage, review }: ReviewsCardListProps) => {
  return (
    <ul className="review-card__list">
      <li className="item-list">
        <span className="item-list__title">Достоинства:</span>
        <p className="item-list__text">{advantage}</p>
      </li>
      <li className="item-list">
        <span className="item-list__title">Недостатки:</span>
        <p className="item-list__text">{disadvantage}</p>
      </li>
      <li className="item-list">
        <span className="item-list__title">Комментарий:</span>
        <p className="item-list__text">{review}</p>
      </li>
    </ul>
  );
};
