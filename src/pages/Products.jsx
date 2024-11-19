import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const product = useSelector(state => state.specific);
  console.log(product);
  return (
    <div>Buwade ji, chawda ji, dono lover hai bhai ji</div>
  )
}
export default Products
