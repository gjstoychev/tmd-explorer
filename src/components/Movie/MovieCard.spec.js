import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'

import Badge from '../Badge'
import ProgressBar from '../ProgressBar'
import GenreBadger from '../GenreBadger'
import WidgetRow from './WidgetRow'
import MovieCard from './MovieCard'

import './MovieCard.css'

describe('(Component) MovieCard', () => {
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
      <MovieCard
        movie={movie}
        genres={genres}
        loading={false}
      />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center movie-container' style={{backgroundImage: 'url("https://image.tmdb.org/t/p/original/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg")'}}>
        <div className='row movie-row'>
          <div className='col-md-4'>
            <img className='img-responsive img-thumbnail' src={'https://image.tmdb.org/t/p/original/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg'} alt={'Poster'} />
          </div>
          <div className='col-md-4'> 
            <WidgetRow label='title'>
              <h2>Snatch!</h2>
            </WidgetRow>
            <WidgetRow label='release date'>
              <h3>{moment('2018-06-14').format('MMMM D, YYYY')}</h3>
            </WidgetRow>
            <WidgetRow label='score'>
              <div>
                <h1 className='inner-label'>
                  <span className='avg-score'>{8.5}</span>
                  <span className='max-score'> / 10</span>
                  <Badge className='badge progress-bar-warning'>{4893} votes</Badge>
                </h1>
                <ProgressBar
                  min={0}
                  max={10}
                  bsStyle='warning'
                  now={8.5}
                  label={'Score: 8.5'}
                />
              </div>
            </WidgetRow>
            <WidgetRow label='popularity'>
              <div>
                <h2 className='inner-label'>{100}</h2>
                <ProgressBar
                  min={0}
                  max={200}
                  bsStyle='success'
                  now={100}
                  label={`Popularity: ${Math.round(100)}`}
                />
              </div>
            </WidgetRow>
          </div>
          <div className='col-md-4'>
            <WidgetRow label='overview'>
              <p className='overview'>Unscrupulous boxing promoters, violent bookmakers, a Russian gangster...</p>
            </WidgetRow>
            <WidgetRow label='genre'>
              <GenreBadger
                ids={[4, 9]}
                genres={[
                  {id: 4, name: 'Comedy'},
                  {id: 9, name: 'Crime'}
                ]}
                loosy
              />
            </WidgetRow>
          </div>
        </div>
      </div>
    )).toEqual(true)
  })

  it('should render empty component with loading true', () => {
    const wrapper = shallow(
      <MovieCard
        movie={{id: 'id1', title: 'Shogun'}}
        genres={[{id: 1, name: 'One'}]}
        loading={true}
      />
    )

    expect(wrapper.equals(
      <h3>The content is loading</h3>
    )).toEqual(true)
  })
})