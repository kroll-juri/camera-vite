import { Link } from 'react-router-dom';

import { NavItemProps } from '@app-header/types/types';

import { routeConfig } from '@app/AppRouter/routeConfig';

export const NavItem = ({ title }: NavItemProps) => {
  return (
    <li className="main-nav__item">
      <Link
        className="main-nav__link"
        to={routeConfig.Index}
      >
        {title}
      </Link>
    </li>
  );
};
