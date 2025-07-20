import { ActiveModal } from '@components/blocks/ActiveModal';
import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { CardListProps } from '@main-page/types/types';
import { useAppSelector } from '@hooks/useAppSelector';
import { getCurrentCamera } from '@slice/camera/camera-selectors/camera-selectors';
import { getActiveCard } from '@slice/modal/modal-selectors/modal-selectors';

export const CardList = ({ sortedCamerasList }: CardListProps) => {
  const activeCard = useAppSelector(getActiveCard);

  return (
    <div className="cards catalog__cards">
      {sortedCamerasList &&
        sortedCamerasList.map((item) => (
          <CardItem
            props={item}
            key={item.id}
            className={''}
            urlModifier={''}
          />
        ))}
      <ActiveModal activeCard={activeCard} />
    </div>
  );
};
