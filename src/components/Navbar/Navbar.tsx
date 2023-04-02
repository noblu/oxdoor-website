import React from "react";
import { dataHQ } from "../../types/Item";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-8 border-t-1 border-pink">
      <div className="flex items-center justify-center flex-col mt-6 ">
        <h4 className="text-[30px] text-primary">
          OXDoor – THẾ GIỚI CỬA NHỰA ĐÀ NẴNG
        </h4>
        <span className="text-[20px] mt-2">
          OXDoor – Cửa nhựa Đà Nẵng chuyên cung cấp các dòng cửa nội thất cao
          cấp, uy tín chất lượng, mang đến cho khách hàng sự hài lòng !
        </span>
      </div>
      <div className="grid grid-cols-4 mt-6 ">
        {dataHQ.map((item, index) => (
          <div
            className="col-span-1 flex items-center justify-center flex-col mr-4"
            key={index}
          >
            <img className="img-navbar" src={item.picture} alt="" />
            {/* <button>
              <a href="#">Chi tiết</a>
            </button> */}
            <div className="flex items-center justify-center flex-col mt-2">
              <span className="text-[20px] text-dark">{item.title}</span>
              <span className="text-[18px]">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
