import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "../layouts/mainLayout";
// pages
import Home from "../components/home";
import NotFound from "../components/notFound";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
