import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../redux/slices/selectedCategory.jsx';
const Sidebarcategory = ({allCategories}) => {
  const {selectedCategories} = useSelector((state)=>state.category);
  const dispatch = useDispatch();
  const handleCategoryChange = (e) => {
    const newCategory = e.target.name;
    selectedCategories.includes(newCategory) 
    ? 
    (dispatch(removeCategory(newCategory))) 
    : 
    (dispatch(addCategory(newCategory)))
  }
  return (
    <div className='max-w-[200px] flex flex-col flex-wrap w-[300px] items-center justify-center'>
        <h3 className='font-semibold text-gray-400 text-[20px] mb-3'>Categories</h3>
        {
            allCategories.map((category,index) => (
                <div key={index} className='flex gap-2 items-center' onClick={handleCategoryChange}>
                    <label htmlFor={`category-${index}`}>{category}</label>
                    <input name={category} id={`category-${index}`} type='checkbox'>
                    </input>
                </div>
            ))
        }
    </div>
  )
}

export default Sidebarcategory
