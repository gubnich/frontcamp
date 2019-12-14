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
  // console.log('/////////////////', payload)
  const { query = '', searchBy = '', sortBy = '' } = payload;
  // async function getMovies() {
    //     return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}&filter=`)
    //     .then(response => response.json())
    //   }
    // const { data, total } = await getMovies();
    // return { type: LOAD_MOVIES, payload: { movies: data, total } }
    
    return dispatch => {
      dispatch(loadMoviesPending());
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}&filter=`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        console.log(res)
        dispatch(loadMoviesSuccess({movies: res.data, total: res.total }));
        return res;
      })
      .catch(error => {
        console.log('попали сюда', error)
        dispatch(loadMoviesError(error));
      })
  }

};
