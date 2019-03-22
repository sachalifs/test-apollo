import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import SELECTED_CUISINE_QUERY from 'src/queries/selected-cuisine.graphql'
import 'src/styles/home.scss'
import Loading from 'src/components/Loading'
import CuisineSelector from 'src/containers/CuisineSelector'
import RestaurantsList from 'src/containers/RestaurantsList'

const mapResultsToProps = ({ data: { loading, selectedCuisine } }) => ({
  selectedCuisine,
  loading
})

@graphql(SELECTED_CUISINE_QUERY, {
  props: mapResultsToProps
})
class Home extends Component {
  render() {
    const { selectedCuisine, loading } = this.props

    if (loading) return <Loading />

    return (
      <div className='container'>
        <CuisineSelector />
        <RestaurantsList cuisine={selectedCuisine} />
      </div>
    )
  }
}

export default Home
