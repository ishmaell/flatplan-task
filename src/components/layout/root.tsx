import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Fragment>
      <header>Header goes here</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer goes here</footer>
    </Fragment>
  );
};

export default Root;
