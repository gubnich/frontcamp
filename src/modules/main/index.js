import React from 'react';
import Logo from '../../components/logo';
import Promo from '../../components/promo';
import List from '../../components/list';
import Search from '../../components/search';
import SearchFilter from '../../components/searchFilter2';
import Footer from '../../components/footer';
import ErrorBoundary from '../../components/error';
import { connect } from 'react-redux';
import { loadMovies } from '../../actions'

import './style.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { query, searchBy, sortBy } = this.props;
    const req = { query, searchBy, sortBy };
    this.props.dispatch(loadMovies(req))
  }

  handleSubmit = (query) => {
    const { searchBy, sortBy } = this.props;
    const req = { query, searchBy, sortBy };
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
              <h1 className='slogan'>Find your movie</h1>
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
  movies: state.movies,
  total: state.total,
  query: state.query,
  sortBy: state.sortBy,
  searchBy: state.searchBy,
})

export default connect(mapStateToProps)(Main)
