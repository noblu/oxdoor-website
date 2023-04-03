import React from 'react'

const ItemProduct = ({ item }: any) => {
  return (
    <div className="col-span-1 mr-1">
      <div>
        <img src={item.picture} alt="" />
      </div>
      <div>
        <span>{item.title}</span>
      </div>
    </div>
  );
};

export default ItemProduct