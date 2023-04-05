import React from "react";
import ImgA from "../assets/cửa-nhựa-Composite/com10.jpg";
const ItemProduct = ({ item }: any) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <img src={item.image} alt="" />
      </div>
      <div className="col-span-2">
        <div className="flex items-start flex-col ml-2">
          <h1>{item.title}</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            totam commodi
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
