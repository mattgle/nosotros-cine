import { Routes } from "@/constants/routes";
import Home from "@/pages/Home/Home";
import Article from "@/pages/Article/Article";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <Home />,
  },
  {
    path: Routes.Article,
    element: <Article />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
