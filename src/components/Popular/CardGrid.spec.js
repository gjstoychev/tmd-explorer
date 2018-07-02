import React from 'react'
import {shallow} from 'enzyme'

import CardGrid from './CardGrid'
import Card from './Card'
import './CardGrid.css'

describe('(Component) CardGrid', () => {
  const movies = [{
    id: '1234',
    title: 'Pacific Rim Uprising',
    popularity: 100,
    vote_count: 4893,
    vote_average: 8.5,
    genre_ids: [4, 9],
    release_date: '2018-06-14',
    backdrop_path: '/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
    poster_path: '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
    overview: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster...'
  }, {
    id: '9876',
    title: 'Rampage',
    popularity: 60,
    vote_count: 1023,
    vote_average: 6.0,
    genre_ids: [39, 42],
    release_date: '2018-05-07',
    backdrop_path: '/4gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
    poster_path: '/zaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
    overview: 'Primatologist Davis Okoye shares an unshakable bond with George'
  }]
  
  const genres = [
    {id: 4, name: 'Comedy'},
    {id: 9, name: 'Crime'},
    {id: 39, name: 'Horror'},
    {id: 42, name: 'Drama'}
  ]

  it('should render empty component', () => {
    const wrapper = shallow(
      <CardGrid
        loading={true}
        movies={movies}
        genres={genres}
        query={undefined}
      />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center loading'>
        <h3>Loading...</h3>
      </div>
      )).toEqual(true)
  })

  it('should render empty component when no match for the search query', () => {
    const wrapper = shallow(
      <CardGrid
        loading={false}
        movies={[]}
        genres={genres}
        query='rambo'
      />
    )

    expect(wrapper.equals(
      <div className='container-fluid text-center empty'>
        <h1>Oh no!</h1>
        <h4>Unfortunately, no results were found for <span>rambo</span></h4>
      </div>
    )).toEqual(true)
  })

  it('should render the component with search query match', () => {
    const movies = [{
      id: '9876',
      title: 'Rampage',
      popularity: 60,
      vote_count: 1023,
      vote_average: 6.0,
      genre_ids: [39, 42],
      release_date: '2018-05-07',
      backdrop_path: '/4gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
      poster_path: '/zaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
      overview: 'Primatologist Davis Okoye shares an unshakable bond with George'
    }]

    const wrapper = shallow(
      <CardGrid
        loading={false}
        movies={movies}
        genres={genres}
        query='Rampa'
      />
    )
  
    expect(wrapper.equals(
      <div className='container-fluid text-center'>
        <div className='row'>
          <Card
            key={9876}
            movie={{
              id: '9876',
              title: 'Rampage',
              popularity: 60,
              vote_count: 1023,
              vote_average: 6.0,
              genre_ids: [39, 42],
              release_date: '2018-05-07',
              backdrop_path: '/4gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
              poster_path: '/zaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
              overview: 'Primatologist Davis Okoye shares an unshakable bond with George'
            }}
            genres={genres}
          />
        </div>
      </div>
    )).toEqual(true)
  })

  it('should render the component with all results', () => {
    const wrapper = shallow(
      <CardGrid
        loading={false}
        movies={movies}
        genres={genres}
      />
    )
  
    expect(wrapper.equals(
      <div className='container-fluid text-center'>
        <div className='row'>
          <Card
            key={1234}
            movie={{
              id: '1234',
              title: 'Pacific Rim Uprising',
              popularity: 100,
              vote_count: 4893,
              vote_average: 8.5,
              genre_ids: [4, 9],
              release_date: '2018-06-14',
              backdrop_path: '/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
              poster_path: '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
              overview: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster...'
            }}
            genres={genres}
          />
          <Card
            key={9876}
            movie={{
              id: '9876',
              title: 'Rampage',
              popularity: 60,
              vote_count: 1023,
              vote_average: 6.0,
              genre_ids: [39, 42],
              release_date: '2018-05-07',
              backdrop_path: '/4gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg',
              poster_path: '/zaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
              overview: 'Primatologist Davis Okoye shares an unshakable bond with George'
            }}
            genres={genres}
          />
        </div>
      </div>
    )).toEqual(true)
  })
})