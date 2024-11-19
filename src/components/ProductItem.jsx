import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({product}) => {
    const smallDescription = product.description.split(' ').slice(0,20).join(' ') + "...";

  return (
    <div className='relative flex flex-col gap-y-2 border rounded-lg items-center gap-2'>
      <span className='font-semibold font-serif mt-1'>{product.name}</span>
      <div className="w-[32vw] h-[30vh] sm:w-[19vw] sm:h-[30vh] overflow-hidden">
            <img
            className="w-full h-full object-cover rounded-lg"
            src={product.image}
            alt={product.name}
            />
        </div>
      <span className='font-sans'>$ {product.price}</span>
      <span className='font-serif mb-4 p-2'>{smallDescription}</span>
      <div className='mt-auto mb-4'>
        <Link to={`/product/${product.id}`}>
          <div className='border px-3 py-1 rounded-lg bg-amber-400'>View Product</div>
        </Link>
      </div>
      
    </div>
  )
}

export default ProductItem
