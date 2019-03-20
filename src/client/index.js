import React from "react"
import { render } from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import App from "./App"
import { uri } from 'config'
import resprofile from 'queries/restaurant-profile.graphql'

const client = new ApolloClient({
  uri
})

console.log(resprofile)

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById("app")
)
