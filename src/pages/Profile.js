import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { graphql } from 'react-apollo'
import resprofile from 'src/queries/restaurant-profile.graphql'
import Loading from 'src/components/Loading'
import ProfileComponent from 'src/components/RestaurantProfile'

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

    return <ProfileComponent restaurant={restaurant} />
  }
}

export default withRouter(Profile)
