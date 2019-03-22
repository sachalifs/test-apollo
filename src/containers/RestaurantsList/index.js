import React, { Component } from 'react'
import { ApolloConsumer, graphql } from 'react-apollo'

import SEARCH_QUERY from 'src/queries/restaurant-search.graphql'
import Loading from 'src/components/Loading'
import RestaurantListItem from 'src/components/RestaurantListItem'

const mapResultsToProps = ({ data: { loading, restaurantSearch, refetch } }) => ({
  restaurants: restaurantSearch && restaurantSearch.restaurants,
  loading,
  refetch
})

const mapPropsToOptions = ({ cuisine }) => ({
  variables: {
    cuisines: cuisine
  }
})

@graphql(SEARCH_QUERY, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class CuisineSelectorContainer extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.cuisine !== nextProps.cuisine) {
      this.props.refetch()
    }
  }
  
  render() {
    const { loading, restaurants } = this.props

    if (loading) return <Loading />

    return (
      <div>
        {restaurants.map((restaurant, i) => (
          <RestaurantListItem key={i} restaurant={restaurant} />
        ))}
      </div>
    )
  }
}

export default CuisineSelectorContainer
