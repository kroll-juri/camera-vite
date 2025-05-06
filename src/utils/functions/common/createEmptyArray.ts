import { MAX_PAGINATION_PAGES_COUNT } from '@utils/const/const';

const createEmptyArray = (value: number): number[] => {
  return Array.from({ length: value });
};

const paginationPages = createEmptyArray(MAX_PAGINATION_PAGES_COUNT);

export { paginationPages };
