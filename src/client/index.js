import React from 'react'
import { render } from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import { uri } from 'src/config'
import './styles.scss'

const client = new ApolloClient({
  uri
})

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/restaurant/:id" component={Profile} />
        {/* <Route path="/restaurant" component={Restaurants} /> */}
      </Switch>
    </Router>
  </ApolloProvider>
)

render(routing, document.getElementById('app'))
