import dayjs from 'dayjs';

import { StarsComponent } from '@app-ui/StarsComponent/StarsComponent';

import 'dayjs/locale/ru.js';
import { ReviewsCardList } from '@product-page/components/ReviewsList/components/ReviewsItem/components/ReviewsCardList';
import { ReviewItemProps } from '@product-page/types/types';

dayjs.locale('ru');

export const ReviewsItem = ({ props }: ReviewItemProps) => {
  const { rating, review, createAt, userName, disadvantage, advantage } = props;

  const dateOfReview = dayjs(createAt).format('DD/MM/YYYY');

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time
          className="review-card__data"
          dateTime={createAt}
        >
          {dateOfReview}
        </time>
      </div>
      <div className="rate review-card__rate">
        <StarsComponent rating={rating} />
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ReviewsCardList
        review={review}
        advantage={advantage}
        disadvantage={disadvantage}
      />
    </li>
  );
};
