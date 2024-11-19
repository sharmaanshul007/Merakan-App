
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
function App() {

  return (
    <Routes>
      <Route path={'/'} element={<Home></Home>}></Route>
      <Route path='/products/:productId' element={<Products></Products>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
  )
}

export default App
