import { LOAD_MOVIES_SUCCESS, LOAD_MOVIES_PENDING, LOAD_MOVIES_ERROR } from './action-types'

function loadMoviesPending() {
  return {
    type: LOAD_MOVIES_PENDING
  }
}

function loadMoviesSuccess(payload) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    payload
  }
};

function loadMoviesError(error) {
  return {
      type: LOAD_MOVIES_ERROR,
      error
  }
}

export function loadMovies(payload) {
  
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
        dispatch(loadMoviesSuccess({movies: res.data, total: res.total, query, searchBy, sortBy }));
        return res;
      })
      .catch(error => {
        console.log('попали сюда', error)
        dispatch(loadMoviesError(error));
      })
  }

};
