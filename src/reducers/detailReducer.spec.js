import reducer from './detailReducer';
import * as types from '../actions/actionTypes';

describe('detail reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      movies: [],
      movie: null,
      error: false,
      pending: false,
      genre: '',
      total: 0
    };
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle LOAD_MOVIES_BY_GENRE_PENDING', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_BY_GENRE_PENDING,
      })
    ).toEqual(
      {
        pending: true,
      }
    )
  })

  it('should handle LOAD_MOVIE_PENDING', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIE_PENDING,
      })
    ).toEqual(
      {
        pending: true,
      }
    )
  })

  it('should handle LOAD_MOVIES_BY_GENRE_SUCCESS', () => {
    const payload = {
      movies: ['movies'],
      genre: 'genre',
      total: 1
    }
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_BY_GENRE_SUCCESS,
        payload
      })
    ).toEqual({ ...payload, pending: false })
  })

  it('should handle LOAD_MOVIE_SUCCESS', () => {
    const payload = {
      movie: 'movie',
      movieGenre: 'genre'
    }
    expect(
      reducer({}, {
        type: types.LOAD_MOVIE_SUCCESS,
        payload
      })
    ).toEqual({ movie: payload.movie, genre: payload.movieGenre, pending: false })
  })

  it('should handle LOAD_MOVIES_BY_GENRE_ERROR', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIES_BY_GENRE_ERROR,
      })
    ).toEqual({ error: true })
  })

  it('should handle LOAD_MOVIE_ERROR', () => {
    expect(
      reducer({}, {
        type: types.LOAD_MOVIE_ERROR,
      })
    ).toEqual({ error: true })
  })
})
