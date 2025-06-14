import { useState } from 'react';

import { ModalComponent } from '@components/blocks/ModalComponent';
import { CardItem } from '@main-page/components/Catalog/components/CardList/components/CardItem';
import { CatalogCallItem } from '@main-page/components/Catalog/components/CatalogCallItem';
import { CardListProps } from '@main-page/types/types';

export const CardList = ({ sortedCamerasList }: CardListProps) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [modalState, setModalState] = useState(false);

  const handleActiveCard = (id: number) => {
    setActiveCardId(id);
  };

  const activeCard = sortedCamerasList.find((item) => item.id === activeCardId);

  return (
    <div className="cards catalog__cards">
      {sortedCamerasList &&
        sortedCamerasList.map((item) => (
          <CardItem
            props={item}
            key={item.id}
            onActiveCardHandler={handleActiveCard}
            setModalState={setModalState}
            className={''}
            urlModifier={''}
          />
        ))}
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
  );
};
