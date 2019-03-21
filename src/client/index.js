import React from 'react'
import { render } from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from 'src/components/Header'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import NotFound from 'src/pages/NotFound'
import { uri } from 'src/config'
import './styles.scss'

const client = new ApolloClient({
  uri
})

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <Header />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/restaurant/:slug" component={Profile} />
        <Route path="/not-found" component={NotFound} />
        {/* <Route path="/restaurant" component={Restaurants} /> */}
      </Switch>
    </Router>
  </ApolloProvider>
)

render(routing, document.getElementById('app'))
