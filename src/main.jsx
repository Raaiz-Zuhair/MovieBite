import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/SearchtextContext'

createRoot(document.getElementById('root')).render(
  <SearchProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SearchProvider>
)
