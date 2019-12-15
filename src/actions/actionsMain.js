import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_PENDING, LOAD_MOVIES_ERROR } from './action-types';

const loadMoviesPending = () => ({
  type: LOAD_MOVIES_PENDING
});

const loadMoviesSuccess = (payload) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload
});

const loadMoviesError = (error) => ({
  type: LOAD_MOVIES_ERROR,
  error
});

export const loadMovies = (payload) => {
  const { query, searchBy, sortBy } = payload;

  return dispatch => {
    dispatch(loadMoviesPending());
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        console.log(res)
        dispatch(loadMoviesSuccess({ movies: res.data, total: res.total, query, searchBy, sortBy }));
        return res;
      })
      .catch(error => {
        dispatch(loadMoviesError(error));
      })
  }
};
