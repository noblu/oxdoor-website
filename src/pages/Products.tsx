import React from 'react'
import ItemProduct from '../components/ItemProduct/ItemProduct'
import { dataDL } from '../types/products'

const Products = () => {
   
    let optionProduct
    optionProduct = dataDL.map((item,index)=>(<ItemProduct item={item} key={index}/>))
  return (
    <div className="flex items-center justify-center flex-col mt-7">
      <h2 className="text-4xl mb-5">Sản Phẩm Bán Chạy</h2>
      <span className='text-xl'>Sản phẩm bền đẹp, vững chắc cho ngôi nhà của Bạn.</span>
      <div className="grid md:grid-cols-2 lg:grid-cols-5">{optionProduct}</div>
    </div>
  );
}

export default Products