import React from 'react'
import {shallow} from 'enzyme'

import Layout from '../Layout'
import Popular from './Popular'
import CardGrid from './CardGrid'

describe('(Component) Popular', () => {
  let wrapper, setFilter, getPopularMovies, getMoviesGenre

  beforeEach(() => {
    setFilter = jest.fn()
    getMoviesGenre = jest.fn()
    getPopularMovies = jest.fn()

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

    wrapper = shallow(
      <Popular
        movies={movies}
        genres={genres}
        loading={false}
        setFilter={setFilter}
        getMoviesGenre={getMoviesGenre}
        getPopularMovies={getPopularMovies}
      />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <Layout header='Popular Movies' setFilter={setFilter}>
        <CardGrid
          movies={[{
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
          }]}
          genres={[
            {id: 4, name: 'Comedy'},
            {id: 9, name: 'Crime'},
            {id: 39, name: 'Horror'},
            {id: 42, name: 'Drama'}
          ]}
          loading={false}
        />
      </Layout>
    )).toEqual(true)
  })

  it('should call getMovie and getMoviesGenre actions on component mount', () => {
    expect(getPopularMovies).toHaveBeenCalledTimes(1)

    expect(getPopularMovies).toBeCalledWith(1)

    expect(getMoviesGenre).toHaveBeenCalledTimes(1)
  })
})