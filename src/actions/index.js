import { LOAD_MOVIES } from "./action-types";

export async function loadMovies(payload) {
  console.log('/////////////////', payload)
  const { query = '', searchBy = '', sortBy = '' } = payload;
  async function getMovies() {
      return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}&filter=`)
      .then(response => response.json())
    }
  const { data, total } = await getMovies();
  return { type: LOAD_MOVIES, payload: { movies: data, total } }
};
