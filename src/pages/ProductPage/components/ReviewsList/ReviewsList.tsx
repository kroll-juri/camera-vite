import dayjs from 'dayjs';

import { useShowElementsScroll } from '@hooks/useShowElementsScroll';

import { getSortedList } from '@utils/functions/getSortedList';

import { ReviewsItem } from '@product-page/components/ReviewsList/components/ReviewsItem';
import { ReviewListProps } from '@product-page/types/types';

export const ReviewsList = ({ props: reviewsList }: ReviewListProps) => {
  const { setLastReviewRef, elementsShowCount, isElementsListLoaded, handleReviewShowClick } =
    useShowElementsScroll(reviewsList);

  const sortedReviews =
    reviewsList && getSortedList(reviewsList, (a, b) => dayjs(b.createAt).unix() - dayjs(a.createAt).unix());

  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
        </div>
        <ul className="review-block__list">
          {sortedReviews &&
            sortedReviews.slice(0, elementsShowCount).map((review, index, arr) => {
              const isLast = index === arr.length - 1;

              return (
                <li
                  key={review.id}
                  ref={isLast ? setLastReviewRef : null}
                >
                  <ReviewsItem props={review} />
                </li>
              );
            })}
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
  );
};
