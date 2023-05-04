import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import BlogLayout from "../Layouts/BlogLayout";
import LoginLayout from "../Layouts/LoginLayout";
import ChefRecipesLayout from "../Layouts/ChefRecipesLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Pages/Login/Register";
import ErrorPage from "../components/ErrorPage";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <ChefRecipesLayout></ChefRecipesLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipes></ChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://savory-selection-server-shanin18.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <BlogLayout></BlogLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
