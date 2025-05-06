import { FooterNavItem } from '@app-footer/components/FooterNav/components/FooterNavItem';
import { FooterNavItemList } from '@app-footer/components/FooterNav/const/const';

export const FooterNav = () => (
  <ul
    className="footer__nav"
    data-testid="footer-nav"
  >
    {FooterNavItemList.map((item) => (
      <FooterNavItem
        title={item.title}
        key={item.title}
        menuList={item.menuList}
      />
    ))}
  </ul>
);
