import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'
import RestaurantListItem from 'src/components/RestaurantListItem'
import Loading from 'src/components/Loading'

const mapResultsToProps = ({ data: { loading, restaurantSearch } }) => ({
  restaurants: restaurantSearch && restaurantSearch.restaurants,
  loading
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
    const { restaurants, loading } = this.props

    if (loading) return <Loading />

    return (
      <div className='container'>
        {restaurants.map((restaurant, i) => (
          <RestaurantListItem key={i} restaurant={restaurant} />
        ))}
      </div>
    )
  }
}

export default Home
