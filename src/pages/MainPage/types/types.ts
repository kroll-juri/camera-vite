import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { Camera } from '@slice/camera/types/types';

import { SortOrder, SortType } from '@main-page/components/Catalog/components/SortForm/types/types';

export interface CatalogCallItemProps {
  props: Camera;
}

export interface CardItemProps extends CatalogCallItemProps {
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
  filter: FilterStateProps;
  setFilter: React.Dispatch<React.SetStateAction<FilterStateProps>>;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type FilterInputChangeHandler = (value: SetStateAction<FilterStateProps>) => void;

export interface CardListProps {
  sortedCamerasList: Camera[];
}

export interface SortParams {
  sortBy: string;
  order: string;
}

export interface SortFormProps {
  handleTypeChange: (type: SortType) => void;
  handleOrderChange: (order: SortOrder) => void;
  sortParams: SortParams;
}

interface PaginationProps {
  onClickHandler: (value: string) => void;
}

export interface PaginationListProps extends PaginationProps {
  maxAmount: number;
  page: number;
  handleNextRange: () => void;
  handlePrevRange: () => void;
  rangeStart: number;
}

export interface PaginationItemProps extends PaginationProps {
  value: number;
  isActive: boolean;
}
