import React from "react";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Input placeholder={"Product"}/>
      <Card />
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;