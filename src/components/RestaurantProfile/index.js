import React from 'react'
import PhotosCarousel from '../PhotosCarousel'
import Title from './Title'
import Subtitle from './Subtitle'
import BookButton from './BookButton'

const Profile = ({
  restaurant: {
    name,
    photos,
    numericRating,
    primaryCuisine,
    reviews,
    zone
  }
}) => (
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

export default Profile