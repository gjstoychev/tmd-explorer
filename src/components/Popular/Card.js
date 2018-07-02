import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import moment from 'moment'

import Badge from '../Badge'
import GenreBadger from '../GenreBadger'
import ProgressBar from '../ProgressBar'
import truncateString from '../../scripts/truncateString'

import './Card.css'

const Card = ({movie, genres}) => {
  const movieUrl = [movie.id, movie.title.toLowerCase().replace(/[^0-9a-z ]/gi, '').replace(/ /g, '-')].join('-')

  return (
    <div className='col-sm-4 col-md-3 card'>
      <Link to={{pathname: `/movie/${movieUrl}`}}>
        <h4 className='card-title'>{movie.title}</h4>
       
        <img
          className='img-responsive card-img'
          src={`https://image.tmdb.org/t/p/w500_and_h282_face${movie.backdrop_path}`}
          alt={'Poster'}
        />
        <div className='card-body'>
          <ProgressBar
            striped
            min={0}
            max={200}
            bsStyle='success'
            now={movie.popularity}
            label={`popularity: ${Math.round(movie.popularity)}`}
          />
          <h4>{moment(movie.release_date).format('MMMM D, YYYY')}</h4>
          <h2>
            <span className='avg-score'>{movie.vote_average}</span>
            <span className='max-score'> / 10</span>
            <Badge className='badge progress-bar-warning'>{movie.vote_count} votes</Badge>
          </h2>
          <GenreBadger
            genres={genres}
            ids={movie.genre_ids}
          />
          <p>{truncateString(movie.overview, 200)}</p>
        </div>
      </Link>
    </div>
  )
}
  
Card.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired
}

export default Card
