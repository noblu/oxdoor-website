import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import Home from "../pages/Home";
import Dewoo from "../pages/components/Dewoo";
import SBSDoor from "../pages/components/SBSDoor";
import ABS from "../pages/components/ABS";
import Kosdoor from "../pages/components/Kosdoor";
import Taiwan from "../pages/components/Taiwan";

export const MainRoutes = () => {
  const param = useParams();
  console.log(param, "param");
  const arrayProduct = () => {};
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
      ],
    },
    // {
    //   path: "kitchen",
    //   element: <Kitchen />,
    // },
    // {
    //   path: "sheet",
    //   element: <Sheet />,
    // },
    // {
    //   path: "accessory",
    //   element: <Accessory />,
    // },
    // {
    //   path: "catalogue",
    //   element: <Accessory />,
    //   children: [
    //     {
    //       path: "catalogue/Dewoo",
    //       element: <Accessory />,
    //     },
    //     {
    //       path: "catalogue/sbsdoo",
    //       element: <Accessory />,
    //     },
    //     {
    //       path: "catalogue/abs",
    //       element: <Accessory />,
    //     },
    //     {
    //       path: "catalogue/kosdoor",
    //       element: <Accessory />,
    //     },
    //     {
    //       path: "catalogue/door",
    //       element: <Accessory />,
    //     },
    //   ],
    // },
    {
      path: "picture",
      element: <h1>picture</h1>,
    },
    {
      path: "price-quotation",
      element: <h1>báo giá</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};
