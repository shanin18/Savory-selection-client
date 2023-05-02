import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Layouts/Home';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        children:[
            
        ]
    }
])

export default router;