import { Link } from 'react-router-dom';

import { BreadCrumbsLinkProps } from '@components/blocks/BreadCrumbs/types/types';

export const BreadCrumbsItemLink = ({ route, title }: BreadCrumbsLinkProps) => {
  return (
    <>
      <li className="breadcrumbs__item">
        <Link
          className="breadcrumbs__link"
          to={route}
        >
          {title}
          <svg
            width="5"
            height="8"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-arrow-mini"></use>
          </svg>
        </Link>
      </li>
    </>
  );
};
