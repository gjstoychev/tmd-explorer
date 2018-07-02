import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import './CardGrid.css'

const CardGrid = ({loading, movies, genres, query}) => {
  if (loading) {
    return (
      <div className='container-fluid text-center loading'>
        <h3>Loading...</h3>
      </div>
    )
  }

  if (!movies.length && query) {
    return (
      <div className='container-fluid text-center empty'>
        <h1>Oh no!</h1>
        <h4>Unfortunately, no results were found for <span>{query}</span></h4>
      </div>
    )
  }

  return (
    <div className='container-fluid text-center'>
      <div className='row'>
        {movies.map(movie =>
          <Card
            key={movie.id}
            movie={movie}
            genres={genres}
          />
        )}
      </div>
    </div>
  )
}

CardGrid.propTypes = {
  movies: PropTypes.array,
  genres: PropTypes.array,
  query: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default CardGrid