import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render( /* Rota para pegar o elemento da div root e renderizar */
  <StrictMode>
    <App /> {/*Renderiza tudo que está dentro de App.jsx*/}
  </StrictMode>,
)
