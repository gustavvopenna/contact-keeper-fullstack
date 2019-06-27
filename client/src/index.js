import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import ContactState from './context/contact/ContactState'

const AppWithRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const AppWithContactState = () => {
  return (
    <ContactState>
      <AppWithRouter />
    </ContactState>
  )
}

ReactDOM.render(<AppWithContactState />, document.getElementById('root'))
