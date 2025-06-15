import { Link } from 'react-router-dom';

import { routeConfig } from '@app/AppRouter/routeConfig';

import { PaginationItemProps } from '@main-page/types/types';

export const PaginationItem = ({ value, page, onClickHandler }: PaginationItemProps) => {
  const attrValue = value.toString();
  const isActive = page === value;

  return (
    <li className="pagination__item">
      <Link
        className={`pagination__link ${isActive ? 'pagination__link&#45;&#45;active' : ''}`}
        to={routeConfig.Index}
        onClick={() => onClickHandler(attrValue)}
      >
        {attrValue}
      </Link>
    </li>
  );
};
