import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as types from './actionTypes';
import * as actions from './actionsDetail';
import * as mock from './mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to set state of "load movie" request as pending', () => {
    const expectedAction = {
      type: types.LOAD_MOVIE_PENDING,
    }
    expect(actions.loadMoviePending()).toEqual(expectedAction)
  })

  it('should create an action to set state of "load movies by genre" request as pending', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES_BY_GENRE_PENDING,
    }
    expect(actions.loadMoviesByGenrePending()).toEqual(expectedAction)
  })

  it('should create an action to add a movie after successful fetching', () => {
    const payload = mock.movie;
    const expectedAction = {
      type: types.LOAD_MOVIE_SUCCESS,
      payload
    }
    expect(actions.loadMovieSuccess(payload)).toEqual(expectedAction)
  })

  it('should create an action to add movies by genre after successful fetching', () => {
    const payload = mock.moviesByGenre;
    const expectedAction = {
      type: types.LOAD_MOVIES_BY_GENRE_SUCCESS,
      payload
    }
    expect(actions.loadMoviesByGenreSuccess(payload)).toEqual(expectedAction)
  })

  it('should create an action to pass an error occured while the movie fetching', () => {
    const error = new Error;
    const expectedAction = {
      type: types.LOAD_MOVIE_ERROR,
      error
    }
    expect(actions.loadMovieError(error)).toEqual(expectedAction)
  })

  it('should create an action to pass an error occured while the movies by genre fetching', () => {
    const error = new Error;
    const expectedAction = {
      type: types.LOAD_MOVIES_BY_GENRE_ERROR,
      error
    }
    expect(actions.loadMoviesByGenreError(error)).toEqual(expectedAction)
  })

  it('should create an action to load a movie', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies/1', {
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.LOAD_MOVIE_PENDING },
    ]
    const store = mockStore({ movie: [] })

    return store.dispatch(actions.loadMovie(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
