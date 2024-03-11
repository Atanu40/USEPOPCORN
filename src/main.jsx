import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import StarComponent from './ComponentAll/StarComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarComponent maxLength={10}/>
    <StarComponent maxLength={3}/>
    <StarComponent />
    
  </React.StrictMode>,
)
