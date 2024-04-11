import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      {/* <ScrollToTop /> */}
      <App />
    </Router>
  </React.StrictMode>,
)
