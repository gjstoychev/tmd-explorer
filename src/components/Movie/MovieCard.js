import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import Badge from '../Badge'
import ProgressBar from '../ProgressBar'
import GenreBadger from '../GenreBadger'

import WidgetRow from './WidgetRow'

import './MovieCard.css'

const MovieCard = ({movie, genres, loading}) => {
  if (loading) {
    return <h3>The content is loading</h3>
  }

  return (
    <div className='container-fluid text-center movie-container' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
      <div className='row movie-row'>
        <div className='col-md-4'>
          <img className='img-responsive img-thumbnail' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={'Poster'} />
        </div>
        <div className='col-md-4'> 
          <WidgetRow label='title'>
            <h2>{movie.title}</h2>
          </WidgetRow>
          <WidgetRow label='release date'>
            <h3>{moment(movie.release_date).format('MMMM D, YYYY')}</h3>
          </WidgetRow>
          <WidgetRow label='score'>
            <div>
              <h1 className='inner-label'>
                <span className='avg-score'>{movie.vote_average}</span>
                <span className='max-score'> / 10</span>
                <Badge className='badge progress-bar-warning'>{movie.vote_count} votes</Badge>
              </h1>
              <ProgressBar
                min={0}
                max={10}
                bsStyle='warning'
                now={movie.vote_average}
                label={`Score: ${movie.vote_average}`}
              />
            </div>
          </WidgetRow>
          <WidgetRow label='popularity'>
            <div>
              <h2 className='inner-label'>{movie.popularity}</h2>
              <ProgressBar
                min={0}
                max={200}
                bsStyle='success'
                now={movie.popularity}
                label={`Popularity: ${Math.round(movie.popularity)}`}
              />
            </div>
          </WidgetRow>
        </div>
        <div className='col-md-4'>
          <WidgetRow label='overview'>
            <p className='overview'>{movie.overview}</p>
          </WidgetRow>
          <WidgetRow label='genre'>
            <GenreBadger
              ids={movie.genre_ids}
              genres={genres}
              loosy
            />
          </WidgetRow>
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  genres: PropTypes.array,
  loading: PropTypes.bool.isRequired
}

export default MovieCard
