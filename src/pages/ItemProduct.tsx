import React from 'react'
import ImgA from "../assets/cửa-nhựa-Composite/com10.jpg"
const ItemProduct = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <img src={ImgA} alt="" />
      </div>
      <div className='col-span-2'>
        <div className='flex items-start flex-col ml-2'>
            <h1>Q #1</h1>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis totam commodi</span>
      </div>
      </div>
    </div>
  );
}

export default ItemProduct