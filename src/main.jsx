import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './App1.jsx'
import HomePage2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomePage />
    {/* <HomePage2/> */}
  </StrictMode>,
)
