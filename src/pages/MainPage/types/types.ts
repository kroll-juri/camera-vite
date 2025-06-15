import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Camera } from '@slice/camera/types/types';

import { SortOrder, SortType } from '@main-page/components/Catalog/components/SortForm/types/types';
import { SetState } from '@shared-types/types';

export interface CatalogCallItemProps {
  props: Camera;
  setModalState: SetState<boolean>;
}

export interface CardItemProps extends CatalogCallItemProps {
  onActiveCardHandler: (id: number) => void;
  className: string;
  urlModifier: string;
}

export type FilterStateProps = {
  category: string;
  type: string[];
  level: string[];
  priceFrom: string;
  priceTo: string;
};

export interface CameraTypeProps {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export interface CameraLevelProps {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export interface CameraCategoryProps {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
}

export interface CatalogFilterProps {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  onChangeResetHandler: () => void;
  filter: FilterStateProps;
  setFilter: Dispatch<SetStateAction<FilterStateProps>>;
}

export interface PriceRangeProps {
  onChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void;
  filter: FilterStateProps;
  setFilter: Dispatch<SetStateAction<FilterStateProps>>;
}

// export interface CatalogAddItemProps {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// };

export type FilterInputChangeHandler = (value: SetStateAction<FilterStateProps>) => void;

export interface CardListProps {
  sortedCamerasList: Camera[];
}

export interface SortParams {
  type: 'price' | 'popularity';
  order: 'increase' | 'decrease';
}

export interface SortFormProps {
  handleTypeChange: (type: SortType) => void;
  handleOrderChange: (order: SortOrder) => void;
  sortParams: SortParams;
}

export interface PaginationProps {
  maxAmount: number;
  page: number;
  onClickHandler: (value: string) => void;
}

export interface PaginationItemProps {
  value: number;
  page: number;
  onClickHandler: (value: string) => void;
}
