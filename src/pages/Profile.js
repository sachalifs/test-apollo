import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'
import resprofile from 'src/queries/restaurant-profile.graphql'
import PhotosCarousel from 'src/components/PhotosCarousel'
import Loading from 'src/components/Loading'
import Title from 'src/components/RestaurantProfile/Title'
import Subtitle from 'src/components/RestaurantProfile/Subtitle'
import BookButton from 'src/components/RestaurantProfile/BookButton'

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

    if (loading) return <Loading />

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
          <PhotosCarousel photos={photos.map(p => p.url)} />
        </div>
        <div className='container mt-3'>
          <Title name={name} />
          <Subtitle
            cuisine={primaryCuisine.name}
            zone={zone.name}
            numericRating={numericRating}
            reviews={reviews.count}
          />
          <BookButton />
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
