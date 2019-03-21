import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'

const mapResultsToProps = props => ({
  restaurantSearch: props.data.restaurantSearch,
  loading: props.data.loading
})

const mapPropsToOptions = () => ({
  variables: {
    slug: 'la-cabrera'
  }
})

@graphql(resSerch, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class Home extends Component {
  render() {
    const { restaurantSearch, loading } = this.props

    if (loading) return 'Loading...'

    return (
      <ul>
        {restaurantSearch.restaurants.map((restaurant, i) => {

          const { name, slug } = restaurant

          return (
            <li key={i}>
              <Link to={`/restaurant/${slug}`}>{name}</Link>
            </li>)
        })}
      </ul>
    )
  }
}

export default Home
