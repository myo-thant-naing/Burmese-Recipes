import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Details from "../pages/details";
import FoodList from "../components/FoodList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/recipes/:id",
        element: <FoodList />,
      },
      {
        path: "/recipes/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
