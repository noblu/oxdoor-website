import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Selcet from "../Select/Select";

const Content = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 items-center h-24">
      <Logo />
      <Search />
    </div>
  );
};

export default Content;
