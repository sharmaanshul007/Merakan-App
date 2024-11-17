import React from 'react'
import {Sidebar} from 'flowbite-react';
const Sidebarcategory = ({allCategories}) => {
  
  return (
    <div className='max-w-[200px] flex flex-col flex-wrap w-[300px] items-center justify-center'>
        <h3 className='font-semibold text-gray-400 text-[20px] mb-3'>Categories</h3>
        {
            allCategories.map((category,index) => (
                <div key={index} className='flex gap-2 items-center'>
                    <label htmlFor={`category-${index}`}>{category}</label>
                    <input id={`category-${index}`} type='checkbox' >
                    </input>
                </div>
            ))
        }
    </div>
  )
}

export default Sidebarcategory
