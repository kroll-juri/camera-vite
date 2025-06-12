import { useState } from 'react';

type WithId = {
  id: number;
};

export const useActiveCard = <T extends WithId>(list: T[]) => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [modalState, setModalState] = useState(false);

  const handleActiveCard = (id: number) => {
    setActiveCardId(id);
  };

  const activeCard = list.find((item) => item.id === activeCardId) || null;

  return { handleActiveCard, activeCard, modalState, setModalState };
};
