import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ChefDetailsLayout from "../Layouts/ChefDetailsLayout";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login"

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
        element: <ChefDetails></ChefDetails>,
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
        }
    ]
  }
]);

export default router;
