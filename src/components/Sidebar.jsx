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
    <div className=' flex flex-col flex-wrap md:w-[400px] items-center gap-4  md:h-screen border-b-2 md:border-r-2 md:sticky md:top-0 '>
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
