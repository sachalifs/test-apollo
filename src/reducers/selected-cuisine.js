import { SELECTED_CUISINE_CHANGE } from 'src/constants'

const initialState = 'parrilla'

const selectedCuisine = (state = initialState, action) => {
  if (action.type === SELECTED_CUISINE_CHANGE) {
    return action.selectedCuisine
  }

  return state
}

export default selectedCuisine
