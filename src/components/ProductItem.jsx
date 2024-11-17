import React from 'react'

const ProductItem = ({product}) => {
    const description = product;
  return (
    <div>
      {product.category}
    </div>
  )
}

export default ProductItem
