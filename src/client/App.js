import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import resprofile from 'queries/restaurant-profile.graphql'
import Header from 'components/Header'

const mapResultsToProps = (props) => {
  console.log({ ...props })
  return {
    restaurant: props.data.restaurant,
    loading: props.data.loading
  }
}

@graphql(resprofile, {
  props: mapResultsToProps
})
class App extends Component {
  render() {
    const { restaurant, loading } = this.props

    if (loading) return 'Loading...'

    return <Header />
  }
}

export default App
