import React from 'react'
import Sidebar from '../components/Sidebar'
import Listing from '../components/Listing'
const Home = () => {
  return (<div className='flex md:flex-row flex-col justify-between '>
    <Sidebar></Sidebar>
    <Listing></Listing>
  </div>
  )
}

export default Home
