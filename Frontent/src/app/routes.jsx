import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router';
import Home from '../pages/Home/Home'
import Registry from '../pages/Registry/Registry'
import Marketplace from '../pages/Marketplace/Marketplace'
import Portfolio from '../pages/Portfolio/Portfolio'
import ReactDOM from "react-dom/client";
import MainLayout from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path :"/",
    element: <MainLayout/>, 
    children : [
      {
        path:"/registry",
        element: <Registry />
      },
      {
        path: "Marketplace",
        element: <Marketplace />
      },
      {
        path: "/portfolio",
        element:<Portfolio />
      }
    ]
  },

 
]);
