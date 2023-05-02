import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ChefDetailsLayout from "../Layouts/ChefDetailsLayout";
import ChefRecipes from "../Pages/ChefRecipes/ChefRecipes";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login"
import Register from "../Pages/Login/Register";
import BlogLayout from "../Layouts/BlogLayout";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <ChefDetailsLayout></ChefDetailsLayout>,
    children: [
      {
        path: "/chef/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader:({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
    ],
  },
  {
    path:"/",
    element:<LoginLayout></LoginLayout>,
    children:[
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
    ]
  },
  {
    path:"/",
    element:<BlogLayout></BlogLayout>,
    children:[
        {
            path:"/blog",
            element:<Blog></Blog>
        }
    ]
  }
]);

export default router;
