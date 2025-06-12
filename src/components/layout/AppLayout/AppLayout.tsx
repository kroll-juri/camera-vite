import { RefObject, useRef } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@layout/Footer';
import { Header } from '@layout/Header';
import ButtonUp from '@app-ui/ButtonUp';

export const AppLayout = () => {
  const location = useLocation();
  const isProductLocation = location.pathname.includes('/camera/');
  const headerRef: RefObject<HTMLAnchorElement | null> = useRef(null);
  return (
    <div className="wrapper">
      <Header childRef={headerRef} />
      <main>
        <Outlet />
      </main>
      {isProductLocation && <ButtonUp childRef={headerRef} />}
      <Footer />
    </div>
  );
};
