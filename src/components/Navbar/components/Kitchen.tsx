import React from "react";
import BP from "../../../assets/tụ-bếp-nhựa/tu-bep-laminate-12-1.png";
import { kitchens } from "../../../types/Item";
const Kitchen = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-8 border-t-1 border-pink">
      <div className="flex items-center justify-center flex-col mt-6 ">
        <h4 className="text-[30px] text-primary">
          OXDoor – THẾ GIỚI TỤ NHỰA ĐÀ NẴNG
        </h4>
        <span className="hidden lg:block text-[20px] mt-2">
          OXDoor – Tụ nhựa Đà Nẵng chuyên cung cấp các dòng tụ nội thất cao cấp,
          uy tín chất lượng, mang đến cho khách hàng sự hài lòng !
        </span>
        <span className="hidden sm:block text-[20px]">
          OXDoor – Tụ nhựa Đà Nẵng chuyên cung cấp các dòng tụ nội thất cao cấp
          !
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-6 ">
        {kitchens.map((item, index) => (
          <div
            className="col-span-1 hover:block relative flex items-center justify-center flex-col m-2"
            key={index}
          >
            <img className="img-navbar" src={item.picture} alt="" />
            {/* <button className="hidden absolute top-[40%] left-[50%] border-solid border-1 border-pink">
              <a href="#">Chi tiết</a>
            </button> */}
            <div className="flex items-center justify-center flex-col mt-2">
              <span className="text-[20px] text-dark">{item.title}</span>
              {/* <span className="text-[18px]">{item.text}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
