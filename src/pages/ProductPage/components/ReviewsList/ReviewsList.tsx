import dayjs from 'dayjs';

import { useShowElements } from '@hooks/useShowElements';

import { REVIEWS_SHOW_COUNT_STEP, START_REVIEWS_SHOW_COUNT } from '@utils/const/const';
import { getSortedList } from '@utils/functions/getSortedList';

import { ReviewsItem } from '@product-page/components/ReviewsList/components/ReviewsItem';
import { ReviewListProps } from '@product-page/types/types';

export const ReviewsList = ({ reviewsList }: ReviewListProps) => {
  const { isElementsListLoaded, handleReviewShowClick, elementsShowCount } = useShowElements(
    START_REVIEWS_SHOW_COUNT,
    REVIEWS_SHOW_COUNT_STEP,
    reviewsList,
  );

  const onDateSortedReviewList =
    reviewsList && getSortedList(reviewsList, (a, b) => dayjs(b.createAt).unix() - dayjs(a.createAt).unix());

  return (
    <>
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
          </div>
          <ul className="review-block__list">
            {onDateSortedReviewList &&
              onDateSortedReviewList
                .map((review) => (
                  <ReviewsItem
                    key={review.id}
                    props={review}
                  />
                ))
                .slice(0, elementsShowCount)}
          </ul>
          <div className="review-block__buttons">
            <button
              className={reviewsList && !isElementsListLoaded ? 'btn btn--purple' : 'visually-hidden'}
              type="button"
              onClick={handleReviewShowClick}
            >
              Показать больше отзывов
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
