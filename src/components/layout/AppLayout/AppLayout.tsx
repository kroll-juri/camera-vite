import { Outlet } from 'react-router-dom';

import { Footer } from '@layout/Footer';
import { Header } from '@layout/Header';

export const AppLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
