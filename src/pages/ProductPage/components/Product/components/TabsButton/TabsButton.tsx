import { TabsButtonProps } from '@product-page/types/types';

export const TabsButton = ({ isActive, title, onClick }: TabsButtonProps) => {
  return (
    <button
      className={`tabs__control ${isActive ? 'is-active' : ''}`}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
