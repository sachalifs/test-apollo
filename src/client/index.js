import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from 'src/components/Header'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import NotFound from 'src/pages/NotFound'
import { uri } from 'src/config'
import './styles.scss'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri,
  cache,
  resolvers: {}
})

const data = {
  selectedCuisine: 'parrilla'
}
cache.writeData({ data })

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <Header />

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/restaurant/:slug' component={Profile} />
        <Route path='/not-found' component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
)

render(routing, document.getElementById('app'))
