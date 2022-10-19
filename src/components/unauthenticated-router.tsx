import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../routes/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function UnauthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default UnauthenticatedRouter;
