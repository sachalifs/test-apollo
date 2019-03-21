import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'
import RestaurantListItem from 'src/components/RestaurantListItem'
import Loading from 'src/components/Loading'

const mapResultsToProps = ({ data: { loading, restaurantSearch, refetch } }) => {

return({
  restaurants: restaurantSearch && restaurantSearch.restaurants,
  cuisines: restaurantSearch && restaurantSearch.facets.cuisine,
  loading,
  refetch
})}

const mapPropsToOptions = () => {
  return({
  variables: {
    cuisines: 'americana'
  }
})}

@graphql(resSerch, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class Home extends Component {

  handleSelectionChange = (e) => this.updateCuisine(e.target.value)

  updateCuisine = (cuisine) => {
    this.props.refetch({ cuisines: cuisine })
  }

  render() {
    const { restaurants, cuisines, loading } = this.props

    if (loading) return <Loading />

    return (
      <div className='container'>
        <select onChange={this.handleSelectionChange}>
          {cuisines.map((cuisine, i) => <option value={cuisine.name.toLowerCase()}>{cuisine.name}</option>)}
        </select>
        {restaurants.map((restaurant, i) => (
          <RestaurantListItem key={i} restaurant={restaurant} />
        ))}
      </div>
    )
  }
}

export default Home
