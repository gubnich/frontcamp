import React from 'react';
import Logo from '../../components/logo';
import Promo from '../../components/promo';
import List from '../../components/list';
import Footer from '../../components/footer';
import MovieDetail from '../../components/movieDetail';
import ErrorBoundary from '../../components/error';
import './style.css';
import { connect } from 'react-redux';
import { loadMoviesByGenre, loadMovie } from '../../actions'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { movie: {}, movies: [], genre: '' };
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

  // async componentDidMount() {
  //   const movie = await this.getMovie(movieId);
  //   const genre = movie.genres[0];
  //   let movies;
  //   if (genre) {
  //     movies = await this.getMovies({ filter: genre });
  //   }
  //   this.setState({ movie, genre, movies });
  // }
  componentDidMount() {
    const movieId = window.location.pathname.split('/').pop();
    console.log('//////////////////////////////////',movieId)
    this.props.dispatch(loadMovie(movieId))
    // this.props.dispatch(loadMoviesByGenre(this.props.genre))
    // const { query, searchBy, sortBy } = this.props;
    // const req = { query, searchBy, sortBy };
  }
  render() {
    const { movie, genre, movies } = this.props;
    console.log('this.props', this.props)
    return (
      <ErrorBoundary>
        <section className='topSection'>
          <Promo />
          <div className='topSectionContent'>
            <Logo />
            <a href='/' className='magnifier'></a>
            <div className='topSectionContentInner'>
              <MovieDetail {...this.props.movie} />
            </div>
          </div>
        </section>
        <main className='main'>
          <section className='infoSection'>
            <span>Films by {genre} genre</span>
          </section>
          <section className='listSection'>
            {movies.length
              ? <List data={movies} />
              : <span className='message'>No films found</span>
            }
          </section>
          <Footer />
        </main>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.detail.movies,
  total: state.detail.total,
  movie: state.detail.movie,
  genre: state.detail.genre,
})

export default connect(mapStateToProps)(Detail)
