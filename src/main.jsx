import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'

// Add Tailwind directives
import './assets/styles/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
