import SELECTED_CUISINE_CHANGE from 'src/constants'

export const changeSelectedCuisine = selectedCuisine => ({
  type: SELECTED_CUISINE_CHANGE,
  selectedCuisine
})
