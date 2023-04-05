import React from "react";

const Exceptem = ({ item }: any) => {
  return (
    <>
      <div className="col-span-1 mr-5">
        <div className="flex items-center justify-center flex-col">
          <img
            src={item.image}
            alt=""
            className="h-[400px] w-[300px] rounded mb-3 mt-4"
          />
          <span>{item.title}</span>
        </div>
      </div>
    </>
  );
};

export default Exceptem;
