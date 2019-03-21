import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'
import resprofile from 'src/queries/restaurant-profile.graphql'
import Header from 'src/components/Header'
import PhotosCarousel from 'src/components/PhotosCarousel'

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
      photos
    } = restaurant

    return (
      <div>
        <div className='container no-gutters' style={{ padding: 0 }}>
          <div className='col-xs'>
            <PhotosCarousel photos={photos.map(p => p.url)} />
          </div>
        </div>
        <div className='container mt-3'>
          <div className='col-xs'>
            <h1 className='h3'>{restaurant.name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
