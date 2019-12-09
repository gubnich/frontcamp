import React from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Search from '../../components/search';
import SearchFilter from '../../components/searchFilter';
import Footer from '../../components/footer';
import MovieDetail from '../../components/movieDetail';
import ErrorBoundary from '../../components/error';
import './style.css';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, movies: [], genre: '' };
  }

  async getMovies({ filter }) {
    return fetch('https://reactjs-cdp.herokuapp.com/movies?filter=' + filter)
      .then(response => response.json())
      .then(response => response.data)
  }

  async getMovie(id) {
    return fetch('https://reactjs-cdp.herokuapp.com/movies/' + id)
      .then(response => response.json())
  }

  async componentDidMount() {
    const movieId = window.location.pathname.split('/').pop();
    console.log(movieId)
    const movie = await this.getMovie(movieId);
    const genre = movie.genres[0];
    let movies;
    if (genre) {
      movies = await this.getMovies({ filter: genre });
    }
    this.setState({ movie, genre, movies });
  }
  render() {
    return (
      <ErrorBoundary>
        <Header>
          <a href='/' className='magnifier'></a>
          <MovieDetail {...this.state.movie} />
        </Header>
        <main className='main'>
          <section className='infoSection'>
            <span>Films by {this.state.genre} genre</span>
          </section>
          <section className='listSection'>
            {this.state.movies.length > 0
              ? <List data={this.state.movies} />
              : <span className='message'>No films found</span>
            }
          </section>
          <Footer />
        </main>
      </ErrorBoundary>
    )
  }
}
