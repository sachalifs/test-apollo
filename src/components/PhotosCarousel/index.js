import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class Header extends React.Component {
  componentDidMount() {
    $('.carousel').carousel()
  }

  render() {
    const { photos } = this.props

    return (
      <div id='carousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          {photos.map((photo, index) => (
            <li data-target='#carousel' data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
          ))}
        </ol>
        <div className='carousel-inner'>
          {photos.map((photo, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={photo} className='d-block w-100' />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  photos: []
}

Header.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Header
