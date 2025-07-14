import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greetings from './Greet.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.querySelector('.rootshit')).render(
  <StrictMode>
    <Greetings/>
  </StrictMode>
)