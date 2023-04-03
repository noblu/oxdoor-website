import React from 'react'
import ItemProduct from '../components/ItemProduct/ItemProduct'
import { dataDL } from '../types/products'

const Products = () => {
   
    let optionProduct
    optionProduct = dataDL.map((item,index)=>(<ItemProduct item={item} key={index}/>))
  return (
    <>
    <span>Products</span>
    <div className='grid grid-cols-5'>
       {optionProduct}
    </div>
    
    </>
    
  )
}

export default Products