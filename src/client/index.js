import React from 'react'
import ReactDOM from 'react-dom'

const HelloMessage = () => <h1>Hola mundo</h1>

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('app')
)
