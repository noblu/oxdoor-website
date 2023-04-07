import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const CallAction = () => {
  return (
    <div className="absolute right-4 bottom-[10px] translate-[-50%]">
      <div className="ping">
        <BsFillTelephoneOutboundFill className=" text-pink rounded-full h-5 w-5 ml-[-5px] mr-2" />
        0905695856
      </div>
    </div>
  );
};

export default CallAction;
