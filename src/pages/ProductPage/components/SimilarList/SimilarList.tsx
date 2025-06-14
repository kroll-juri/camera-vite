import { ModalComponent } from '@components/blocks/ModalComponent';

import { useActiveCard } from '@hooks/useActiveCard';
import { useSlider } from '@hooks/useSlider';

import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { CatalogCallItem } from '@main-page/components/Catalog/components/CatalogCallItem';
import { SimilarListProps } from '@product-page/types/types';

export const SimilarList = ({ props: similarList }: SimilarListProps) => {
  const { handleActiveCard, activeCard, modalState, setModalState } = useActiveCard(similarList);

  const { disabled, handleIncreaseClick, handleDecreaseClick, showCardsCount } = useSlider(similarList);

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {similarList &&
              similarList
                .map((item) => (
                  <CardItem
                    onActiveCardHandler={handleActiveCard}
                    props={item}
                    setModalState={setModalState}
                    key={item.id}
                    className={'is-active'}
                    urlModifier={'/public'}
                  />
                ))
                .slice(showCardsCount.start, showCardsCount.end)}
            {activeCard && (
              <ModalComponent
                className={''}
                isActive={modalState}
                setModalState={setModalState}
              >
                <CatalogCallItem
                  props={activeCard}
                  setModalState={setModalState}
                />
              </ModalComponent>
            )}
          </div>
          <button
            aria-label="Предыдущий слайд"
            className="slider-controls slider-controls--prev"
            disabled={disabled.prevDisabled}
            type="button"
            onClick={handleDecreaseClick}
          >
            <svg
              aria-hidden="true"
              height="12"
              width="7"
            >
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            aria-label="Следующий слайд"
            className="slider-controls slider-controls--next"
            type="button"
            disabled={disabled.nextDisabled}
            onClick={handleIncreaseClick}
          >
            <svg
              aria-hidden="true"
              height="12"
              width="7"
            >
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
