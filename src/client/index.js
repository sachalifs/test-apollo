import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'src/store'
import Header from 'src/components/Header'
import Home from 'src/pages/Home'
import Profile from 'src/pages/Profile'
import NotFound from 'src/pages/NotFound'
import { uri } from 'src/config'
import './styles.scss'

const routing = (
  <Provider store={store}>
    <Router>
      <Header />

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/restaurant/:slug' component={Profile} />
        <Route path='/not-found' component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)

render(routing, document.getElementById('app'))
