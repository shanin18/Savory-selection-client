import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";

const BlogLayout = () => {
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

export default BlogLayout;
