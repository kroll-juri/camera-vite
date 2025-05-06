import { NavItem } from '@app-header/components/NavBar/components/NavItem';
import { NavItemTitles } from '@app-header/types/types';

export const NavBar = () => {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {Object.values(NavItemTitles).map((title) => (
          <NavItem
            title={title}
            key={title}
          />
        ))}
      </ul>
    </nav>
  );
};
