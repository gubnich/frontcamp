import { combineReducers } from 'redux'
import example from './example'

// export default combineReducers({
//   example,
// })

const initialState = {
  movies: [],
  total: 0,
  error: false,
  pending: false,
  query: '',
  searchBy: 'title',
  sortBy: 'release_date',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES_PENDING':
      return {
        ...state,
        pending: true,
      }
    case 'LOAD_MOVIES_SUCCESS':
      console.log('action', action.payload.total, state)
      const { movies, total, query, searchBy, sortBy } = action.payload;
      return {
        ...state,
        pending: false,
        total,
        movies,
        query,
        searchBy,
        sortBy,
      }
    case 'LOAD_MOVIES_ERROR':
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
};
export default rootReducer;
