import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './navbar.jsx'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode className="m-0 p-0" >
    <Navbar  />
    <App />
  </React.StrictMode>,
)
