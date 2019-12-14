import { combineReducers } from 'redux'
import example from './example'

// export default combineReducers({
//   example,
// })

const initialState = {
  movies: []
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return [
        ...state,
        {
          movies: action.movies,
          total: action.total,
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
};
export default rootReducer;
