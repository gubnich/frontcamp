const initialState = {
  movies: [],
  movie: null,
  error: false,
  pending: false,
  genre: '',
  total: 0
};

function detailReducer(state = initialState, action){
  switch (action.type) {
    case 'LOAD_MOVIES_BY_GENRE_PENDING':
      return {
        ...state,
        pending: true,
      }
    case 'LOAD_MOVIE_PENDING':
    return {
      ...state,
      pending: true,
    }
    case 'LOAD_MOVIES_BY_GENRE_SUCCESS':
      console.log('action', action.payload.total, state)
      const { movies, genre, total } = action.payload;
      return {
        ...state,
        pending: false,
        movies,
        genre,
        total,
      }
      case 'LOAD_MOVIE_SUCCESS':
      console.log('action', action.payload, state)
      const { movie, movieGenre } = action.payload;
      return {
        ...state,
        pending: false,
        movie,
        genre: movieGenre,
      }
    case 'LOAD_MOVIES_BY_GENRE_ERROR':
      return {
        ...state,
        error: true,
      }
      case 'LOAD_MOVIE_ERROR':
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
};

export default detailReducer;
