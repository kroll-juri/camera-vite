import { Link } from 'react-router-dom';

import { routeConfig } from '@app/AppRouter/routeConfig';

import { PaginationItemProps } from '@main-page/types/types';

export const PaginationItem = ({ value, isActive, onClickHandler }: PaginationItemProps) => {
  const attrValue = value.toString();

  return (
    <li className="pagination__item">
      <Link
        className={`pagination__link ${isActive ? 'pagination__link--active' : ''}`}
        to={`${routeConfig.Index}?page=${attrValue}`}
        onClick={(e) => {
          e.preventDefault();
          onClickHandler(attrValue);
        }}
      >
        {attrValue}
      </Link>
    </li>
  );
};
