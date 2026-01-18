import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './App1.jsx'
import HomePage2 from './App2.jsx'

const base = import.meta.env.BASE_URL || '/'
const fullPath = window.location.pathname || '/'
const path = fullPath.startsWith(base)
  ? `/${fullPath.slice(base.length)}`.replace('//', '/')
  : fullPath

const routes = {
  '/pet01': <App />,
  '/pet02': <HomePage />,
  '/pet03': <HomePage2 />,
}
const page = routes[path] ?? <App />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {page}
  </StrictMode>,
)
