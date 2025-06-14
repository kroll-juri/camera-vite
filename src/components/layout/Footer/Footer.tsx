import { FooterNav } from '@app-footer/components/FooterNav';
import { FooterSocial } from '@app-footer/components/FooterSocial';
import { footerDescription } from '@app-footer/const/const';
import { Logo } from '@app-ui/Logo';

import { useAppSelector } from '@hooks/useAppSelector';

import { getCurrentCameraLoadingStatus } from '@slice/camera/camera-selectors/camera-selectors';

export const Footer = () => {
  const isLoading = useAppSelector(getCurrentCameraLoadingStatus);

  return (
    <footer
      className={isLoading ? 'visually-hidden' : 'footer'}
      id="footer"
      data-testid="footer"
    >
      <div className="container">
        <div className="footer__info">
          <Logo
            xlinkHrefProp={'-mono'}
            classNameProp={'footer'}
          />
          <p className="footer__description">{footerDescription}</p>
          <FooterSocial />
        </div>
        <FooterNav />
      </div>
    </footer>
  );
};
