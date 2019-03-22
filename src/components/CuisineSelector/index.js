import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
const sanitize = str => str.replace(/-/gi, ' ')

const CuisineSelector = ({ cuisines, selectedCuisine, onSelectedCuisineChange }) => (
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Tipo de cocina: {sanitize(capitalize(selectedCuisine))}
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

CuisineSelector.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSelectedCuisineChange: PropTypes.func.isRequired
}

export default CuisineSelector
