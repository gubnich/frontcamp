import React from 'react';
import { connect } from 'react-redux';

import { loadMovies } from '../../actions'
import { SLOGAN, NO_FILMS_MESSAGE } from '../../constants';
import Logo from '../../components/logo';
import Promo from '../../components/promo';
import List from '../../components/list';
import Search from '../../components/search';
import SearchFilter from '../../components/searchFilter';
import Footer from '../../components/footer';
import ErrorBoundary from '../../components/error';

import './style.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const query = window.location.pathname.split('/').pop();
    const { searchBy, sortBy } = this.props;
    const req = { query, searchBy, sortBy };
    this.props.dispatch(loadMovies(req))
  }

  handleSubmit = (query) => {
    const { searchBy, sortBy } = this.props;
    const req = { query, searchBy, sortBy };
    this.props.history.push(`/search/${query}`);
    this.props.dispatch(loadMovies(req))
  }

  handleSearchBy = (searchBy) => {
    const { query, sortBy } = this.props;
    const req = { query, sortBy, searchBy };
    this.props.dispatch(loadMovies(req))
  }

  handleSortBy = (sortBy) => {
    const { query, searchBy } = this.props;
    const req = { query, searchBy, sortBy };
    this.props.dispatch(loadMovies(req))
  }

  render() {
    const { movies, total, sortBy, searchBy } = this.props
    return (
      <ErrorBoundary>
        <header className='header'>
          <Promo />
          <div className='headerContent'>
            <Logo />
            <div className='headerContentInner'>
              <h1 className='slogan'>{SLOGAN}</h1>
              <Search onSubmit={this.handleSubmit} searchBy={searchBy} sortBy={sortBy} />
              <div className='searchOptions'>
                <span className='searchCaption uppercase'>search by</span>
                <SearchFilter onChange={this.handleSearchBy} caption1='title' caption2='genre' value1='title' value2='genres' selected={searchBy} />
              </div>
            </div>
          </div>
        </header>
        <main className='main'>
          <section className='resultsSection'>
            <div className='result'>{total} movie found</div>
            <SearchFilter onChange={this.handleSortBy} caption1='release date' caption2='rating' value1='release_date' value2='vote_average' selected={sortBy} />
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
  const { movies, total, query, sortBy, searchBy } = state.main;
  return { movies, total, query, sortBy, searchBy };
}

export default connect(mapStateToProps)(Main)
