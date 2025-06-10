import { NavBar } from '@app-header/components/NavBar';
import { IconClose } from '@app-ui/IconClose';
import { Logo } from '@app-ui/Logo';

export const Header = () => {
  return (
    <header
      className="header"
      id="header"
    >
      <div className="container">
        <Logo
          classNameProp={'header'}
          xlinkHrefProp={''}
        />
        <NavBar />
        <div className="form-search">
          <form>
            <label>
              <svg
                className="form-search__icon"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#icon-lens"></use>
              </svg>
              <input
                className="form-search__input"
                type="text"
                autoComplete="off"
                placeholder="Поиск по сайту"
              />
            </label>
            <ul className="form-search__select-list">
              <li
                className="form-search__select-item"
                tabIndex={0}
              >
                Cannonball Pro MX 8i
              </li>
              <li
                className="form-search__select-item"
                tabIndex={0}
              >
                Cannonball Pro MX 7i
              </li>
              <li
                className="form-search__select-item"
                tabIndex={0}
              >
                Cannonball Pro MX 6i
              </li>
              <li
                className="form-search__select-item"
                tabIndex={0}
              >
                Cannonball Pro MX 5i
              </li>
              <li
                className="form-search__select-item"
                tabIndex={0}
              >
                Cannonball Pro MX 4i
              </li>
            </ul>
          </form>
          <button
            className="form-search__reset"
            type="reset"
          >
            <IconClose />
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <a
          className="header__basket-link"
          href="#"
        >
          <svg
            width="16"
            height="16"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-basket"></use>
          </svg>
        </a>
      </div>
    </header>
  );
};
