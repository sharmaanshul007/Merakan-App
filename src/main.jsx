import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavbarHeader from './components/Navbar.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
  <BrowserRouter>
    <NavbarHeader></NavbarHeader>
    <App />
  </BrowserRouter>
  </Provider>
  </PersistGate>,
)
