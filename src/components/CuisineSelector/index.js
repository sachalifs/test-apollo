import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class CuisineSelector extends React.Component {
  render() {
    const { cuisines, onSelectedCuisineChange } = this.props

    return (
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tipo de cocina
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          {cuisines.map((cuisine, i) =>
            <button class="dropdown-item" type="button" key={i} onClick={() => onSelectedCuisineChange(cuisine.slug)}>
              {cuisine.name}
            </button>
          )}
        </div>
      </div>
    )
  }
}

CuisineSelector.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelectedCuisineChange: PropTypes.func.isRequired
}

export default CuisineSelector
