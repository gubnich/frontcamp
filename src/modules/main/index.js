import React from 'react';
import Header from '../../components/header';
import List from '../../components/list';
import Search from '../../components/search';
import SearchFilter from '../../components/searchFilter';
import Footer from '../../components/footer';
import './style.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  async getMovies({query, searchBy}) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=kill&searchBy=title&filter=drama`)
      .then(response => response.json())
      .then(response => response.data)
  }

  async componentDidMount() {
    this.setState({ movies: await this.getMovies({}) });
    // this.setState({ movies: [] });
  }

  render() {
    return (
      <>
        <Header>
          <h1 className='slogan'>Find your movie</h1>
          <Search />
        </Header>
        <main className='main'>
          <section className='resultsSection'>
            <div className='result'>{this.state.movies.length} movie found</div>
            <SearchFilter name='sortBy' value1='release date' value2='rating' />
          </section>
          <section className='listSection'>
            {this.state.movies.length
              ? <List data={this.state.movies} />
              : <span className='message'>No films found</span>
            }
          </section>
          <Footer />
        </main>
      </>

    )
  }
}
