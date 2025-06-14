import { FooterSocialItem } from '@app-footer/components/FooterSocial/components/FooterSocialItem';
import { SocialItemsValues } from '@app-footer/components/FooterSocial/const/const';

export const FooterSocial = () => (
  <ul
    className="social"
    data-testid="footer-social"
  >
    {Object.entries(SocialItemsValues).map((item) => (
      <FooterSocialItem
        footerSocialItemValues={item}
        key={item[0]}
      />
    ))}
  </ul>
);
