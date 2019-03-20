import React from 'react'
import { render } from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import { uri } from 'config'

const client = new ApolloClient({
  uri
})

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        {/* <Route path="/restaurant" component={Restaurants} /> */}
      </Switch>
    </Router>
  </ApolloProvider>
)

render(routing, document.getElementById('app'))