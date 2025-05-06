import { ActiveModal } from '@components/blocks/ActiveModal';
import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { CardListProps } from '@main-page/types/types';

export const CardList = ({ sortedCamerasList }: CardListProps) => {
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
      <ActiveModal />
    </div>
  );
};
