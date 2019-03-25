import {
  CUISINES_REQUEST,
  CUISINES_RECEIVE,
  CUISINES_FAIL
} from 'src/constants'

const initialState = {
  bySlug: {},
  slugs: [],
  loading: false,
  error: null
}

const cuisines = (state = initialState, action) => {
  switch (action.type) {
    case CUISINES_REQUEST:
      return {
        ...state,
        bySlug: {},
        slugs: [],
        loading: true,
        error: null
      }
    case CUISINES_RECEIVE:
      return {
        ...state,
        slugs: action.slugs,
        bySlug: action.bySlug,
        loading: false,
        error: null
      }
    case CUISINES_FAIL:
      return {
        ...state,
        bySlug: {},
        slugs: [],
        loading: false,
        error: action.error
      }
    default:
      return state
  }

}

export default cuisines
