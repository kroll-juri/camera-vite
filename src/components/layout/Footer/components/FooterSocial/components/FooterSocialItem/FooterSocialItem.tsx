import { FooterSocialItemProps } from '@app-footer/components/FooterSocial/types/types';

export const FooterSocialItem = ({ footerSocialItemValues }: FooterSocialItemProps) => (
  <li
    className="social__item"
    data-testid="footer-social-item"
  >
    <a
      className="link"
      href="#"
      aria-label={`Переход на страницу ${footerSocialItemValues[1]}`}
    >
      <svg
        width="20"
        height="20"
        aria-hidden="true"
      >
        <use xlinkHref={`#icon-${footerSocialItemValues[0]}`}></use>
      </svg>
    </a>
  </li>
);
