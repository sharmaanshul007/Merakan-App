import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const {product} = useSelector(state => state.specific);
  console.log(product);
  return (
    <div className="flex items-center justify-center p-6 min-h-screen bg-gray-100">
  <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
    <div className="text-2xl font-bold text-gray-800 mb-4 text-center">
      {product.name}
    </div>
    <div className="w-full h-[300px] overflow-hidden rounded-lg mb-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-lg font-semibold text-gray-700 text-center mb-4">
      ${product.price}
    </div>
    <div className="text-sm text-gray-600 mb-6 text-center">
      {product.description}
    </div>
    <div className="flex justify-center">
      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  )
}
export default Products
