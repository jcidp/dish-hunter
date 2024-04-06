import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "recipes/:id",
      element: <Recipe />,
      errorElement: <ErrorPage />
    },
  ]);


  return <RouterProvider router={router} />;
};

export default Router;
