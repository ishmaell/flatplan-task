import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../ui/header';
import Footer from '../ui/footer';

const Root = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Root;
