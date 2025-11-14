import React from "react";

import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
