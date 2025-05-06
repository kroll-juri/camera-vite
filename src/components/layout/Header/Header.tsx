import { NavBar } from '@app-header/components/NavBar';
import { SearchForm } from '@app-header/components/SearchForm';
import { HeaderProps } from '@app-header/types/types';
import { Logo } from '@app-ui/Logo';

import { BasketCountItem } from '@components/blocks/BasketCountItem';

export const Header = ({ childRef }: HeaderProps) => {
  return (
    <header
      className="header"
      id="header"
      ref={childRef}
    >
      <div className="container">
        <Logo
          classNameProp={'header'}
          xlinkHrefProp={''}
        />
        <NavBar />
        <SearchForm />
        <BasketCountItem />
      </div>
    </header>
  );
};
