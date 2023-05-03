import React from "react";
import NavigationBar from "../Shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="min-h-[calc(100vh-410px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
