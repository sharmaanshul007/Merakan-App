import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavbarHeader from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <NavbarHeader></NavbarHeader>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
