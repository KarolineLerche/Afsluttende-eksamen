import React from 'react'  // Importerer React-biblioteket for at kunne bruge JSX og React-komponenter
import ReactDOM from 'react-dom/client'  // Importerer ReactDOM-biblioteket for at kunne rendere React-komponenter i DOM'en
import App from './App.jsx'  // Importerer hovedkomponenten for applikationen fra App.jsx
import './index.css'  // Importerer globale CSS-stilarter for applikationen




// Opretter en rod for React-applikationen og render komponenten i DOM-elementet med id'et 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/* React.StrictMode hjælper med at identificere potentielle problemer i applikationen ved at aktivere ekstra kontrol og advarsler i udviklingstilstand */}
    <App />  {/* Render hovedkomponenten App */}
  </React.StrictMode>,
)
