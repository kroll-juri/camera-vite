import { IconArrow } from '@app-ui/IconArrow';

import { useSlider } from '@hooks/useSlider';

import { ActiveModal } from '@components/blocks/ActiveModal';
import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { SimilarListProps } from '@product-page/types/types';

export const SimilarList = ({ props: similarList }: SimilarListProps) => {
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
                    props={item}
                    key={item.id}
                    className={'is-active'}
                    urlModifier={'/public'}
                  />
                ))
                .slice(showCardsCount.start, showCardsCount.end)}
            <ActiveModal />
          </div>
          <button
            aria-label="Предыдущий слайд"
            className="slider-controls slider-controls--prev"
            disabled={disabled.prevDisabled}
            type="button"
            onClick={handleDecreaseClick}
          >
            <IconArrow />
          </button>
          <button
            aria-label="Следующий слайд"
            className="slider-controls slider-controls--next"
            type="button"
            disabled={disabled.nextDisabled}
            onClick={handleIncreaseClick}
          >
            <IconArrow />
          </button>
        </div>
      </div>
    </section>
  );
};
