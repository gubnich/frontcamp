import { LOAD_MOVIES_BY_GENRE_SUCCESS, LOAD_MOVIES_BY_GENRE_PENDING, LOAD_MOVIES_BY_GENRE_ERROR,
  LOAD_MOVIE_PENDING, LOAD_MOVIE_SUCCESS, LOAD_MOVIE_ERROR } from './actionTypes';

const loadMoviesByGenrePending = () => ({
  type: LOAD_MOVIES_BY_GENRE_PENDING
});

const loadMoviePending = () => ({
  type: LOAD_MOVIE_PENDING
});

const loadMoviesByGenreSuccess = (payload) => ({
  type: LOAD_MOVIES_BY_GENRE_SUCCESS,
  payload
});

const loadMovieSuccess = (payload) => ({
  type: LOAD_MOVIE_SUCCESS,
  payload
});

const loadMoviesByGenreError = (error) => ({
  type: LOAD_MOVIES_BY_GENRE_ERROR,
  error
});

const loadMovieError = (error) => ({
  type: LOAD_MOVIE_ERROR,
  error
});

export const loadMoviesByGenre = (payload) => {
  const { genre } = payload;

  return dispatch => {
    dispatch(loadMoviesByGenrePending());
    fetch(`https://reactjs-cdp.herokuapp.com/movies?filter=${genre}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        console.log(res)
        dispatch(loadMoviesByGenreSuccess({ movies: res.data, total: res.total, genre }));
        return res;
      })
      .catch(error => {
        dispatch(loadMoviesByGenreError(error));
      })
  }
};

export const loadMovie = (movieId) => {

  return dispatch => {
    dispatch(loadMoviePending());
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        console.log('res',res)
        dispatch(loadMovieSuccess({ movie: res, movieGenre: res.genres[0] }));
        dispatch(loadMoviesByGenre({ genre: res.genres[0] }));
        return res;
      })
      .catch(error => {
        dispatch(loadMovieError(error));
      })
  }
};
