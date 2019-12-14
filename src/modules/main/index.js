import React from 'react';
import Header from '../../components/header';
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
    // this.state = { movies: [], total: 0 };
  }
  
  // async searchMovies(e) {
  //   e.preventDefault();
  //   const query = e.target[0].value;
  //   const searchBy = 
  //     e.target[2].checked ?
  //     e.target[2].value :
  //     e.target[3].value;
  //     const sortBy = 
  //     e.target[4].checked ?
  //     'release_date' :
  //     'vote_average';
  //     const { data, total } = await this.getMovies(query, searchBy, sortBy);
  //   this.setState({ movies: data, total });
  // }

  // async getMovies(query = '', searchBy = '', sortBy = '') {
  //   return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${query}&searchBy=${searchBy}&filter=`)
  //   .then(response => response.json())
  // }
  
  async componentDidMount() {
    this.props.dispatch(loadMovies({}))
  }
  
  render () {
    console.log(this.props)
    const { movies } = this.props
    return (
      <ErrorBoundary>
        <Header>
          <h1 className='slogan'>Find your movie</h1>
          {/* <Search id='searchForm' onSubmit={this.searchMovies.bind(this)} /> */}
        </Header>
        <main className='main'>
          <section className='resultsSection'>
            {/* <div className='result'>{this.state.total} movie found</div> */}
            <SearchFilter form='searchForm' name='sortBy' value1='release date' value2='rating' />
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
  movies: state.movies
})

export default connect(mapStateToProps)(Main)
