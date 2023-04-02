import React from "react";
import { GrFormSearch } from "react-icons/gr";
import Select from "../Select/Select";

const Search = () => {
  return (
    <div className=" col-span-2 lg:col-span-4">
      <div className="lg:flex">
        <Select />
        <div className="search">
          <GrFormSearch size={22} fill="white" />
          <input
            type="text"
            placeholder="Tên sản phẩm"
            className="w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
