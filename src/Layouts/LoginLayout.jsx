import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="min-h-[calc(100vh-410px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginLayout;
