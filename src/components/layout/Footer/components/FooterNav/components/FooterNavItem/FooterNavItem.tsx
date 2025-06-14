import { FooterNavMenuItem } from '@app-footer/components/FooterNav/components/FooterNavMenuItem';
import { FooterNavItemProps } from '@app-footer/components/FooterNav/types/types';

export const FooterNavItem = ({ title, menuList }: FooterNavItemProps) => (
  <li
    className="footer__nav-item"
    data-testid="footer-nav-item"
  >
    <p className="footer__title">{title}</p>
    <ul className="footer__list">
      {menuList.map((item) => (
        <FooterNavMenuItem
          footerMenuListItem={item}
          key={item}
        />
      ))}
    </ul>
  </li>
);
