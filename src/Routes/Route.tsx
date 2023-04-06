import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Home from "../pages/Home";
import Dewoo from "../pages/components/Dewoo";
import SBSDoor from "../pages/components/SBSDoor";
import ABS from "../pages/components/ABS";
import Kosdoor from "../pages/components/Kosdoor";
import Taiwan from "../pages/components/Taiwan";
import UpFile from "../components/Updata/UpFile";
import Kitchen from "../components/Navbar/components/Kitchen";
import Accessory from "../components/Navbar/components/Accessory";
import PlasticSheet from "../components/Navbar/components/PlasticSheet";
import Layout from "../components/Navbar/Layout";
import Navbar from "../components/Navbar/components/Navbar";

export const MainRoutes = () => {
  const param = useParams();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "products/dewoo",
          element: <Dewoo />,
        },
        {
          path: "products/sbsdoor",
          element: <SBSDoor />,
        },
        {
          path: "products/abs",
          element: <ABS />,
        },
        {
          path: "products/kosdoor",
          element: <Kosdoor />,
        },
        {
          path: "products/dai-loan",
          element: <Taiwan />,
        },
        {
          path:'/',
          element: <Layout />,
          children: [
        {
          path: "",
          element: <Navbar />,
        },
        {
          path: "types/kitchen",
          element: <Kitchen />,
        },
        {
          path: "types/plasticsheet",
          element: <PlasticSheet />,
        },
        {
          path: "types/accessory",
          element: <Accessory />,
        },
      ],
    },
      ],
      
    },
   
    {
      path: "picture",
      element: <h1>picture</h1>,
    },
    {
      path: "price-quotation",
      element: <h1>báo giá</h1>,
    },
    {
      path: "admin",
      element: <UpFile />,
    },
  ]);
  return <RouterProvider router={router} />;
};
