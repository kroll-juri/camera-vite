import { RefObject, useRef } from 'react';
import ButtonUp from 'components/ui/ButtonUp';

import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from '@layout/Footer';
import { Header } from '@layout/Header';

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
