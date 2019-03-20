import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import resprofile from 'queries/restaurant-profile.graphql'
import Header from 'components/Header'
import PhotosCarousel from 'components/PhotosCarousel'
import './styles.scss'

const mapResultsToProps = props => ({
  restaurant: props.data.restaurant,
  loading: props.data.loading
})

@graphql(resprofile, {
  props: mapResultsToProps
})
class App extends Component {
  render() {
    const { restaurant, loading } = this.props

    if (loading) return 'Loading...'

    return (
      <div>
        <Header />
        <div className='container no-gutters' style={{ padding: 0 }}>
          <div className='col-xs'>
            <PhotosCarousel photos={[
              'https://u.tfstatic.com/restaurant_photos/244/69244/169/664/sadler-sala-1449b.jpg',
              'https://u.tfstatic.com/restaurant_photos/244/69244/169/664/sadler-sala-73ec5.jpg',
              'https://u.tfstatic.com/restaurant_photos/244/69244/169/664/sadler-sala-6e01e.jpg',
              'https://u.tfstatic.com/restaurant_photos/244/69244/169/664/sadler-sala-cc909.jpg',
              'https://u.tfstatic.com/restaurant_photos/244/69244/169/664/sadler-sala-8c620.jpg'
            ]} />
          </div>
        </div>
        <div className='container mt-2'>
          <div className='col-xs'>
            <h1 className='h3'>Sadler</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default App
