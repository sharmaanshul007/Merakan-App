import React from 'react'
import ProductItem from './ProductItem'
const Listing = ({products}) => {
  return (
    <div className='grid grid-cols-1 w-[90%] mx-auto text-center mt- sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-2 p-3'>
      {
        products.map((product,index)=>{return <ProductItem key={index}product={product}></ProductItem>})
      }
    </div>
  )
}

export default Listing
