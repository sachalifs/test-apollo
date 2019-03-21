import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import resprofile from 'src/queries/restaurant-profile.graphql'
import Header from 'src/components/Header'
import PhotosCarousel from 'src/components/PhotosCarousel'

const mapResultsToProps = props => ({
  restaurant: props.data.restaurant,
  loading: props.data.loading
})

@graphql(resprofile, {
  props: mapResultsToProps
})
class Home extends Component {
  render() {
    const { restaurant, loading } = this.props

    if (loading) return 'Loading...'

    return (
      <div>
        <Link to='/restaurant/foo'>Foo</Link>
      </div>
    )
  }
}

export default Home
