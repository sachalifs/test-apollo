import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'
import RestaurantListItem from 'src/components/RestaurantListItem'
import Loading from 'src/components/Loading'
import CuisineSelector from 'src/containers/CuisineSelector'

const mapResultsToProps = ({ data: { loading, restaurantSearch, refetch } }) => ({
  restaurants: restaurantSearch && restaurantSearch.restaurants,
  loading,
  refetch
})

const mapPropsToOptions = () => ({
  variables: {
    cuisines: 'americana'
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
        <CuisineSelector />
        {restaurants.map((restaurant, i) => (
          <RestaurantListItem key={i} restaurant={restaurant} />
        ))}
      </div>
    )
  }
}

export default Home
