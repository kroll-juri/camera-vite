import { RefObject } from 'react';

export const scrollToAnchor = (refElement: RefObject<HTMLAnchorElement | null>) => {
  if (refElement.current) {
    refElement.current.scrollIntoView({ behavior: 'smooth' });
  }
};
