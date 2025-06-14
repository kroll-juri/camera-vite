import { NavBar } from '@app-header/components/NavBar';
import { SearchForm } from '@app-header/components/SearchForm';
import { HeaderProps } from '@app-header/types/types';
import { IconBasket } from '@app-ui/IconBasket';
import { Logo } from '@app-ui/Logo';

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
        <IconBasket />
      </div>
    </header>
  );
};
