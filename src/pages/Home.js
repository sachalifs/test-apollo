import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resSerch from 'src/queries/restaurant-search.graphql'
import 'src/styles/home.scss'

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

    if (loading) return 'Loading...'

    return (
      <div className='container'>

        <select onChange={this.handleSelectionChange}>
          {cuisines.map((cuisine, i) => <option value={cuisine.name.toLowerCase()}>{cuisine.name}</option>)}
        </select>

        {restaurants.map((restaurant, i) => {
          const {
            name,
            slug,
            primaryPhoto,
            numericRating,
            primaryCuisine,
            zone
          } = restaurant

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
                  <div className='row'>
                    <div className='col text-muted small'>
                      {primaryCuisine.name} en {zone.name}
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
