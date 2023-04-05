import React from "react";
import ImgTest from "../assets/cửa-nhựa-ABS-hàn-quốc/h1.jpg";
const PageProducts = ({ item }: any) => {
  return (
    <>
      <div className="flex items-center justify-center m-4">
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1">
            <div className="flex items-center justify-center flex-col">
              <img src={item.image} alt="" className="m-2" />
              <h2 className="mt-2">{item.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageProducts;
