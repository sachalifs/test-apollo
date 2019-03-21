import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'

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

    if (loading) return 'Loading...'

    return (
      <div className='container'>
        {restaurants.map((restaurant, i) => {
          const { name, slug, primaryPhoto, numericRating } = restaurant

          return (
            <Link to={`/restaurant/${slug}`} className='row mt-3 pb-3 restaurant-card text-dark' key={i}>
              <div className='col-4'>
                <img className='img-thumbnail' src={primaryPhoto.url} />
              </div>
              <div className='col-8 pl-0'>
                <div className='container no-gutters px-0'>
                  <div className='row'>
                    <div className='col-8 pr-0'>
                      <h2 className='h5'>{name}</h2>
                    </div>
                    <div className='col-4 text-right small'>
                      <span className='h5'>{numericRating}</span>
                      <span className='text-muted'>/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Home
