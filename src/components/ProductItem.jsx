import React from 'react'

const ProductItem = ({product}) => {
    const smallDescription = product.description.split(' ').slice(0,20).join(' ') + "...";
  return (
    <div className='flex flex-col gap-y-2 border rounded-lg justify-center items-center'>
      <span className='font-semibold font-serif mt-1'>{product.name}</span>
      <div className="w-[19vw] h-[30vh] overflow-hidden">
            <img
            className="w-full h-full object-cover rounded-lg"
            src={product.image}
            alt={product.name}
            />
        </div>
      <span className='font-sans'>$ {product.price}</span>
      <span className='font-serif mb-4 p-2'>{smallDescription}</span>
    </div>
  )
}

export default ProductItem
