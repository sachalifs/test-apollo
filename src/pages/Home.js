import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'
import CuisineSelector from 'src/components/CuisineSelector'

const mapResultsToProps = ({ data: { loading, restaurantSearch } }) => ({
  restaurants: restaurantSearch && restaurantSearch.restaurants,
  loading
})

const mapPropsToOptions = () => ({
  variables: {
    cuisines: 'sushi'
  }
})

@graphql(resSerch, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class Home extends Component {
  render() {
    const { restaurants, loading } = this.props

    if (loading) return 'Loading...'

    return (
      <div className='container'>
        <CuisineSelector />
        {restaurants.map((restaurant, i) => {
          const { name, slug, primaryPhoto } = restaurant

          return (
            <Link to={`/restaurant/${slug}`} className='row mt-3 pb-3 restaurant-card text-dark' key={i}>
              <div className='col-4'>
                <img className='img-thumbnail' src={primaryPhoto.url} />
              </div>
              <div className='col-8 pl-0'>
                <h2 className='h5'>{name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Home
