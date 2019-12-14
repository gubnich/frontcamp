import { combineReducers } from 'redux'
import example from './example'

// export default combineReducers({
//   example,
// })

const initialState = {
  movies: [],
  total: 0,
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES_SUCCESS':
      console.log('action', action.payload.total, state)
      return {
        ...state,
        total: action.payload.total,
        movies: action.payload.movies,
      }
    case 'LOAD_MOVIES_ERROR':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
};
export default rootReducer;
