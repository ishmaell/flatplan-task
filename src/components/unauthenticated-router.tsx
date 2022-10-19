import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './layout/root';
import Home from '../routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function UnauthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default UnauthenticatedRouter;
