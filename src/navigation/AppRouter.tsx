import { Routes } from '@/constants/routes';
import Home from '@/pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Home />
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
