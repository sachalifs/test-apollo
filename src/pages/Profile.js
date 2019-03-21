import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'
import resprofile from 'src/queries/restaurant-profile.graphql'
import Header from 'src/components/Header'
import PhotosCarousel from 'src/components/PhotosCarousel'
import FormatNumber from 'format-number'

const format = FormatNumber({ integerSeparator: '.' })

const mapResultsToProps = props => ({
  restaurant: props.data.restaurant,
  loading: props.data.loading
})

const mapPropsToOptions = ({ match }) => ({
  variables: {
    slug: match.params.slug
  }
})

@graphql(resprofile, {
  props: mapResultsToProps,
  options: mapPropsToOptions
})
class Profile extends Component {
  render() {
    const { restaurant, loading } = this.props

    if (loading) return 'Loading...'

    if (!restaurant) {
      return <Redirect to='/not-found' />
    }

    const {
      name,
      photos,
      numericRating,
      primaryCuisine,
      reviews,
      zone
    } = restaurant

    return (
      <div>
        <div className='container no-gutters' style={{ padding: 0 }}>
          <div className='col-xs'>
            <PhotosCarousel photos={photos.map(p => p.url)} />
          </div>
        </div>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col'>
              <h1 className='h2'>{name}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-9 h5'>{primaryCuisine.name} en {zone.name}</div>
            <div className='col-3'>
              <span className='h4'>{numericRating}</span>
              <span className='text-muted'>/10</span>
            </div>
          </div>
          <div className='row text-muted small'>
            <div className='col-7'>Precio promedio $800</div>
            <div className='col-5 text-right'>
              {format(reviews.count)} opiniones
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col'>
              <button type='button' className='btn btn-primary btn-block'>Reservar una mesa</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
