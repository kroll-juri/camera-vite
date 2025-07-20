import dayjs from 'dayjs';

import { Loader } from '@app-ui/Loader';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from '@hooks/useForm';
import { useShowElementsScroll } from '@hooks/useShowElementsScroll';

import { getModalTitle } from '@slice/modal/modal-selectors/modal-selectors';
import { setActiveCard, setModalOpen } from '@slice/modal/modal-slice/modal-slice';
import { getReviewLoadingStatus } from '@slice/review/review-selectors/review-selectors';

import { getSortedList } from '@utils/functions/common/getSortedList';

import { ActiveModal } from '@components/blocks/ActiveModal';
import { modalController } from '@components/blocks/ModalComponent/helpers';
import { ReviewsItem } from '@product-page/components/ReviewsList/components/ReviewsItem';
import { ReviewListProps } from '@product-page/types/types';

export const ReviewsList = ({ props: reviewsList, activeCard }: ReviewListProps) => {
  const { setLastReviewRef, elementsShowCount, isElementsListLoaded, handleReviewShowClick } =
    useShowElementsScroll(reviewsList);
  const sortedReviews =
    reviewsList && getSortedList(reviewsList, (a, b) => dayjs(b.createAt).unix() - dayjs(a.createAt).unix());
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(getReviewLoadingStatus);

  const title = useAppSelector(getModalTitle);

  const { inputValue, handleInputValueChange, handleFormSubmit, errors } = useForm(activeCard);

  return (
    <>
      {isLoading && <Loader />}
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button
              className="btn"
              type="button"
              onClick={() => {
                dispatch(
                  setModalOpen({
                    name: modalController.leaveReview,
                    title: modalController.leaveReview,
                  }),
                );
                dispatch(setActiveCard(activeCard));
              }}
            >
              Оставить свой отзыв
            </button>
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
      {title === modalController.leaveReview && activeCard && (
        <ActiveModal
          activeCard={activeCard}
          inputValue={inputValue}
          handleInputValueChange={handleInputValueChange}
          handleFormSubmit={handleFormSubmit}
          errors={errors}
        />
      )}
    </>
  );
};
