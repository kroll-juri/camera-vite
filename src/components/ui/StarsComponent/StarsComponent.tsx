import { IconStar } from '@app-ui/IconStar';
import { XlinkHref } from '@app-ui/IconStar/types/types';
import { StarsComponentProps } from '@app-ui/StarsComponent/types/types';

import { MAX_STARS_COUNT } from '@utils/const/const';

export const StarsComponent = ({ rating }: StarsComponentProps) => {
  return (
    <>
      {[...Array(rating)].map((_, index) => (
        <IconStar
          key={index}
          xlinkHref={XlinkHref.FullStar}
        />
      ))}
      {[...Array(MAX_STARS_COUNT - rating)].map((_, index) => (
        <IconStar
          key={index}
          xlinkHref={XlinkHref.EmptyStar}
        />
      ))}
    </>
  );
};
