import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Cards from './files/Cards.jsx'
createRoot(document.getElementById('root')).render(

    <StrictMode>
      <Cards />
  </StrictMode>,
)
