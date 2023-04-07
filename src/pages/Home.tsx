import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Content from "../components/Content/Content";
import Menu from "../components/Menu/Menu";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Footer from "./Footer";
import Collapsible from "../components/CollapsiblePanel/Collapsible";
import CallAction from "../components/CallAction/CallAction";
import LayoutProduct from "./components/LayoutProduct";
import Layout from "../components/Navbar/Layout";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content />
      <Menu />
      <Slider />
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
      </Routes>
      <Outlet/>
      <Routes>
        <Route path="/" element={<LayoutProduct />}></Route>
      </Routes>
      <Collapsible />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
