import React from 'react'
import ProductItem from './ProductItem'
const Listing = ({products}) => {
  return (
    <div>
      {
        products.map((product,index)=>{return <ProductItem key={index}product={product}></ProductItem>})
      }
    </div>
  )
}

export default Listing
