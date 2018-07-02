import React from 'react'
import PropTypes from 'prop-types'

import CardGrid from './CardGrid'

import Layout from '../Layout'

class Popular extends React.PureComponent {
  static propTypes = {
    query: PropTypes.string,
    movies: PropTypes.array,
    genres: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    setFilter: PropTypes.func.isRequired,
    getMoviesGenre: PropTypes.func.isRequired,
    getPopularMovies: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {getPopularMovies, getMoviesGenre} = this.props

    const pageNumber = 1
    
    getPopularMovies(pageNumber)

    getMoviesGenre()
  }

  render() { 
    const {loading, movies, genres, query, setFilter} = this.props

    return (
      <Layout header='Popular Movies' setFilter={setFilter}>
        <CardGrid
          loading={loading}
          movies={movies}
          genres={genres}
          query={query}
        />
      </Layout>
    )
  }
}

export default Popular