import { useState } from 'react';

import { ModalComponent } from '@components/blocks/ModalComponent';

import { useAppSelector } from '@hooks/useAppSelector';

import { getCamerasList } from '@slice/camera/camera-selectors/camera-selectors';

import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { CatalogCallItem } from '@main-page/components/Catalog/components/CatalogCallItem';

export const CardList = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActiveCard = (id: number) => {
    setActiveCardId(id);
  };
  const cardListData = useAppSelector(getCamerasList);
  const activeCard = cardListData.find((item) => item.id === activeCardId);

  return (
    <div className="cards catalog__cards">
      {cardListData &&
        cardListData.map((item) => (
          <CardItem
            props={{ ...item }}
            key={item.id}
            onActiveCardHandler={handleActiveCard}
            setIsModalState={setIsModalOpen}
          />
        ))}
      {activeCard && (
        <ModalComponent
          className={''}
          isActive={isModalOpen}
        >
          <CatalogCallItem
            activeCamera={activeCard}
            setIsModalState={setIsModalOpen}
          />
        </ModalComponent>
      )}
    </div>
  );
};
