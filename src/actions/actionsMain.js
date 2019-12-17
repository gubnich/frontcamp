import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_PENDING, LOAD_MOVIES_ERROR } from './actionTypes';

export const loadMoviesPending = () => ({
  type: LOAD_MOVIES_PENDING
});

export const loadMoviesSuccess = (payload) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload
});

export const loadMoviesError = (error) => ({
  type: LOAD_MOVIES_ERROR,
  error
});

export const loadMovies = (payload) => {
  const { query, searchBy, sortBy } = payload;

  return async dispatch => {
    dispatch(loadMoviesPending());
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(loadMoviesSuccess({ movies: res.data, total: res.total, query, searchBy, sortBy }));
        return res;
      })
      .catch(error => {
        dispatch(loadMoviesError(error));
      })
  }
};
