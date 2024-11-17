import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home></Home>}></Route>
      <Route path='/products/:productId' element={<Products></Products>}></Route>
    </Routes>
  )
}

export default App
