
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
