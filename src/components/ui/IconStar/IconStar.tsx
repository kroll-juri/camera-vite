import { IconStarProps } from '@app-ui/IconStar/types/types';

export const IconStar = ({ xlinkHref }: IconStarProps) => {
  return (
    <svg
      width="17"
      height="16"
      aria-hidden="true"
    >
      <use xlinkHref={xlinkHref}></use>
    </svg>
  );
};
