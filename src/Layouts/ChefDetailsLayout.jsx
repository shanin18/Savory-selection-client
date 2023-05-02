import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";

const ChefDetailsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefDetailsLayout;
