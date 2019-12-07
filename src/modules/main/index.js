import React, { useEffect } from 'react';
import Header from '../../components/header';

export default () => {
  useEffect(() => {
    async function getMovies() {
      const data = await fetch(' https://reactjs-cdp.herokuapp.com/movies');
      console.log(data);
  }
  getMovies();
  }
   , []);
  return (
    <Header />
  )
}
