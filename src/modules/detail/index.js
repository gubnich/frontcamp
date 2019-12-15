import React from 'react';
import { connect } from 'react-redux';

import { loadMovie } from '../../actions';
import { NO_FILMS_MESSAGE } from '../../constants';
import Logo from '../../components/logo';
import Promo from '../../components/promo';
import List from '../../components/list';
import Footer from '../../components/footer';
import MovieDetail from '../../components/movieDetail';
import ErrorBoundary from '../../components/error';
import './style.css';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const movieId = window.location.pathname.split('/').pop();
    this.props.dispatch(loadMovie(movieId));
  }

  render() {
    const { movie, genre, movies } = this.props;
    return (
      <ErrorBoundary>
        <section className='topSection'>
          <Promo />
          <div className='topSectionContent'>
            <Logo />
            <a href='/' className='magnifier'></a>
            <div className='topSectionContentInner'>
              <MovieDetail {...movie} />
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
              : <span className='message'>{NO_FILMS_MESSAGE}</span>
            }
          </section>
        </main>
        <Footer />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => {
  const { movies, movie, genre } = state.detail;
  return { movies, movie, genre };
}

export default connect(mapStateToProps)(Detail)
