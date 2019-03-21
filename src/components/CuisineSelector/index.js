import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class CuisineSelector extends React.Component {
  // componentDidMount() {
  //   $('.carousel').carousel()
  // }

  render() {
    const { photos } = this.props

    return (
      <div class="dropdown show">
        <a class="btn btn-secondary btn-lg dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Parrillas
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Americana</a>
          <a class="dropdown-item" href="#">Pastas</a>
          <a class="dropdown-item" href="#">Sushi</a>
        </div>
      </div>
    )
  }
}

CuisineSelector.defaultProps = {
  photos: []
}

CuisineSelector.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default CuisineSelector
