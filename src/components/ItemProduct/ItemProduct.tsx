import React from "react";

const ItemProduct = ({ item }: any) => {
  return (
    <div className="col-span-1 flex items-center justify-center flex-col m-1 lg:m-3">
      <div>
        <img
          src={item.picture}
          alt=""
          className="h-[420px] w-[360px] lg:w-[310px] object-cover rounded"
        />
      </div>
      <div>
        <span>{item.title}</span>
      </div>
    </div>
  );
};

export default ItemProduct;
