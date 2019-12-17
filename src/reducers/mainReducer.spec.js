import reducer from './mainReducer';
import * as types from '../actions/actionTypes';

describe('main reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      movies: [],
      total: 0,
      error: false,
      pending: false,
      query: '',
      searchBy: 'title',
      sortBy: 'release_date',
    };
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle LOAD_MOVIES_PENDING', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_PENDING,
      })
    ).toEqual(
      {
        pending: true,
      }
    )
  })

  it('should handle LOAD_MOVIES_SUCCESS', () => {
    const payload = {
      movies: ['movies'],
      total: 1,
      query: 'query',
      searchBy: 'searchBy',
      sortBy: 'sortBy',
    }
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_SUCCESS,
        payload
      })
    ).toEqual({ ...payload, pending: false })
  })

  it('should handle LOAD_MOVIES_ERROR', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_ERROR,
      })
    ).toEqual({ error: true })
  })

})
