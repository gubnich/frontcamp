import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as types from './actionTypes';
import * as actions from './actionsMain';
import * as mock from './mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to set state of "load movies" request as pending', () => {
    const expectedAction = {
      type: types.LOAD_MOVIES_PENDING,
    }
    expect(actions.loadMoviesPending()).toEqual(expectedAction)
  })

  it('should create an action to add a movies after successful fetching', () => {
    const payload = [mock.movie];
    const expectedAction = {
      type: types.LOAD_MOVIES_SUCCESS,
      payload
    }
    expect(actions.loadMoviesSuccess(payload)).toEqual(expectedAction)
  })

  it('should create an action to pass an error occured while the movies fetching', () => {
    const error = new Error;
    const expectedAction = {
      type: types.LOAD_MOVIES_ERROR,
      error
    }
    expect(actions.loadMoviesError(error)).toEqual(expectedAction)
  })

  it('should create an action to load movies', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?sortBy=&sortOrder=desc&search=&searchBy=', {
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: types.LOAD_MOVIES_PENDING },
    ]
    const store = mockStore({ movies: [] })

    return store.dispatch(actions.loadMovies({ sortBy: '', searchBy: '', query: '' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
