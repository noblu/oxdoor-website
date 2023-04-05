import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Content from "../components/Content/Content";
import Menu from "../components/Menu/Menu";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Footer from "./Footer";
import Collapsible from "../components/CollapsiblePanel/Collapsible";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content />
      <Menu />
      <Slider />
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
      </Routes>
      <Outlet />
      <Collapsible />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
