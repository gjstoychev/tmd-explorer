import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'
import {Link} from 'react-router-dom'

import Card from './Card'
import Badge from '../Badge'
import GenreBadger from '../GenreBadger'
import ProgressBar from '../ProgressBar'
import truncateString from '../../scripts/truncateString'

import './Card.css'

describe('(Component) Card', () => {
  it('should render the component', () => {
    const movie = {
      id: '1234',
      title: 'Snatch!',
      popularity: 100,
      vote_count: 4893,
      vote_average: 8.5,
      genre_ids: [4, 9],
      release_date: '2018-06-14',
      backdrop_path: '/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
      poster_path: '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
      overview: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster...'
    }

    const genres = [
      {id: 4, name: 'Comedy'},
      {id: 9, name: 'Crime'}
    ]

    const wrapper = shallow(
      <Card
        movie={movie}
        genres={genres}
      />
    )

    const movieUrl = [movie.id, movie.title.toLowerCase().replace(/[^0-9a-z ]/gi, '').replace(/ /g, '-')].join('-')

    expect(wrapper.equals(
      <div className='col-sm-4 col-md-3 card'>
        <Link to={{pathname: '/movie/1234-snatch'}}>
          <h4 className='card-title'>Snatch!</h4>
          <img
            className='img-responsive card-img'
            src={'https://image.tmdb.org/t/p/w500_and_h282_face/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg'}
            alt={'Poster'}
          />
          <div className='card-body'>
            <ProgressBar
              striped
              min={0}
              max={200}
              bsStyle='success'
              now={100}
              label={'popularity: 100'}
            />
            <h4>{moment('2018-06-14').format('MMMM D, YYYY')}</h4>
            <h2>
              <span className='avg-score'>{8.5}</span>
              <span className='max-score'> / 10</span>
              <Badge className='badge progress-bar-warning'>{4893} votes</Badge>
            </h2>
            <GenreBadger
              genres={[
                {id: 4, name: 'Comedy'},
                {id: 9, name: 'Crime'}
              ]}
              ids={[4, 9]}
            />
            <p>Unscrupulous boxing promoters, violent bookmakers, a Russian gangster...</p>
          </div>
        </Link>
      </div>
    )).toEqual(true)
  })
})