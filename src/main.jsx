// main.jsx
// Entry point: loads the global CSS and renders <App /> into the
// <div id="root"> in index.html.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode runs extra checks in development (it renders components twice)
  <StrictMode>
    <App />
  </StrictMode>,
)
