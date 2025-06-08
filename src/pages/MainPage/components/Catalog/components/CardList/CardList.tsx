import { useAppSelector } from '@hooks/useAppSelector';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';

import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';

export const CardList = () => {
  const cardListData = useAppSelector(getCamerasList);

  return (
    <div className="cards catalog__cards">
      {cardListData &&
        cardListData.map((item) => (
          <CardItem
            props={{ ...item }}
            key={item.id}
          />
        ))}
    </div>
  );
};
