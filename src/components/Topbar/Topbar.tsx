import React from "react";
import { HiOutlineMail, MdLocationPin, BsTelephoneFill } from "react-icons/all";
const Topbar = () => {
  return (
    <div className="h-12 bg-pink flex items-center justify-center">
      <span className="flex items-center text-sm sm:text-[17px] md:text-xl mr-4">
        <MdLocationPin /> 600 TÔN ĐỨC THẮNG
      </span>
      <span className="hidden lg:flex items-center text-xl px-10">
        <HiOutlineMail className="mr-1" /> OXDoor.VN@gmail.com
      </span>
      <span className="flex items-center text-[16px] sm:text-[17px] md:text-xl">
        <BsTelephoneFill className="mr-1" /> HOTLINE : 0905695856 - 0975317123
      </span>
    </div>
  );
};

export default Topbar;
