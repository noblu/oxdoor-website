import React from 'react'
import H1 from '../assets/cửa-nhựa-ABS-hàn-quốc/h1.jpg'
const page = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <img src={H1} alt="" />
        </div>
        <div className='col-span-2 flex flex-col'>
           <h4>Q #1</h4>
           <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</span>
        </div>
      </div>
    </>
  );
}

export default page