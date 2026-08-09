import React from "react";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Card from "../components/Card/Card";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Card />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;