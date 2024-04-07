import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Recipe from "./components/Recipe";
import ErrorPage from "./components/ErrorPage";
import Landing from "./components/Landing";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Landing />},
        {path: "recipes/:id", element: <Recipe />}
      ]
    },
  ]);


  return <RouterProvider router={router} />;
};

export default Router;
