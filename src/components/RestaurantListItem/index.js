import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import PROFILE_QUERY from '../../queries/restaurant-profile.graphql'

const mapPropsToOptions = ({ restaurant }) => ({
  variables: {
    slug: restaurant.slug
  }
})

@graphql(PROFILE_QUERY, {
  options: mapPropsToOptions
})
class RestaurantListItem extends React.Component {
  render () {
    const {
      name,
      slug,
      primaryPhoto,
      numericRating,
      primaryCuisine,
      zone
    } = this.props.restaurant

    return (
      <Link to={`/restaurant/${slug}`} className='row mt-3 pb-3 restaurant-card text-dark'>
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
  }
}

export default RestaurantListItem
