import { combineReducers } from 'redux'
import selectedCuisine from './selected-cuisine'
import cuisines from './cuisines'

export default combineReducers({
  selectedCuisine,
  cuisines
})
