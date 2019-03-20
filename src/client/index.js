import React from 'react'
import ReactDOM from 'react-dom'
import config from 'config'
import resprofile from 'queries/restaurant-profile.graphql'

const HelloMessage = () => <h1>Hola mundo</h1>

console.log(resprofile)

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('app')
)
