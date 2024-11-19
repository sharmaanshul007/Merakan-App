import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSpecificProduct } from '../redux/slices/SpecificProduct';

const ProductItem = ({product}) => {
    const smallDescription = product.description.split(' ').slice(0,20).join(' ') + "...";
  const dispatch = useDispatch();

  const handleProduct = () => {
    dispatch(addSpecificProduct(product));
  }

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
        <Link to={`/products/${product.id}`}>
          <div className='border px-3 py-1 rounded-lg bg-amber-400' onClick={handleProduct}>View Product</div>
        </Link>
        <div>
          
        </div>
      </div>
      
    </div>
  )
}

export default ProductItem
