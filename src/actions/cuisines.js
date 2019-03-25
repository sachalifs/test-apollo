import { normalize, schema } from 'normalizr'
import {
  CUISINES_REQUEST,
  CUISINES_RECEIVE,
  CUISINES_FAIL
} from 'src/constants'
import { query } from 'src/graphql-client'
import CUISINES_QUERY from 'src/queries/cuisines.graphql'

const Cuisine = new schema.Entity('cuisines', {}, { idAttribute: 'slug' })

export const fetchAllCuisines = () => async dispatch => {
  dispatch(requestCuisines())

  try {
    const response = await query(CUISINES_QUERY)
    const { facets } = response.restaurantSearch
    const normalizedData = normalize(facets.cuisine, [Cuisine])
    dispatch(receiveCuisines({
      bySlug: normalizedData.entities.cuisines,
      slugs: normalizedData.result
    }))
  } catch (err) {
    dispatch(failCuisines(err))
  }
}

const requestCuisines = () => ({
  type: CUISINES_REQUEST
})

const receiveCuisines = ({ bySlug, slugs }) => ({
  type: CUISINES_RECEIVE,
  bySlug,
  slugs
})

const failCuisines = error => ({
  type: CUISINES_FAIL,
  error
})
