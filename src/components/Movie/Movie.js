import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout'

import MovieCard from './MovieCard'

class Movie extends React.PureComponent {
  static propTypes = {
    movie: PropTypes.object,
    genres: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getMovie: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    getMoviesGenre: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {location, getMovie, getMoviesGenre} = this.props

    const urlString = location.pathname.split('-')
    const movieTitle = urlString.slice(1, urlString.length).join(' ')

    getMovie(movieTitle)

    getMoviesGenre()
  }
  
  render () {
    const {movie, genres, loading, setFilter} = this.props
  
    return (
      <Layout setFilter={setFilter}>
        <MovieCard
          movie={movie}
          genres={genres}
          loading={loading}
        />
      </Layout>
    )
  }
}

export default Movie