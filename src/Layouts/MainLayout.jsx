import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;