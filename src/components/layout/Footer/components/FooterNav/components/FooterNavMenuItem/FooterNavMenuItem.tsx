import { Link } from 'react-router-dom';

import { FooterNavMenuItemProps } from '@app-footer/components/FooterNav/types/types';

export const FooterNavMenuItem = ({ footerMenuListItem }: FooterNavMenuItemProps) => (
  <li
    className="footer__item"
    data-testid="footer-nav-menu-item"
  >
    <Link
      className="link"
      to="/"
    >
      {footerMenuListItem}
    </Link>
  </li>
);
