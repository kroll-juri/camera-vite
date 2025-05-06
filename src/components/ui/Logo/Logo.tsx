import { Link } from 'react-router-dom';

import { LogoProps } from '@app-ui/Logo/types/types';

const Logo = ({ xlinkHrefProp, classNameProp }: LogoProps) => (
  <Link
    className={`${classNameProp}__logo`}
    to="/"
    aria-label="Переход на главную"
    data-testid="logo"
  >
    <svg
      width="100"
      height="36"
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-logo${xlinkHrefProp}`}></use>
    </svg>
  </Link>
);

export default Logo;
