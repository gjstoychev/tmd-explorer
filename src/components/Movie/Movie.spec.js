import React from 'react'
import {shallow} from 'enzyme'

import Movie from './Movie'
import Layout from '../Layout'
import MovieCard from './MovieCard'

describe('(Component) Movie', () => {
  let wrapper, setFilter, getMovie, getMoviesGenre

  beforeEach(() => {
    getMovie = jest.fn()
    setFilter = jest.fn()
    getMoviesGenre = jest.fn()

    const location = {
      pathname: '/movie/268896-pacific-rim-uprising'
    }

    const movie = {
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
    }
  
    const genres = [
      {id: 4, name: 'Comedy'},
      {id: 9, name: 'Crime'}
    ]

    wrapper = shallow(
      <Movie
        movie={movie}
        genres={genres}
        loading={false}
        location={location}
        getMovie={getMovie}
        setFilter={setFilter}
        getMoviesGenre={getMoviesGenre}
      />
    )
  })

  it('should render the component', () => {
    expect(wrapper.equals(
      <Layout setFilter={setFilter}>
        <MovieCard
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
          genres={[
            {id: 4, name: 'Comedy'},
            {id: 9, name: 'Crime'}
          ]}
        loading={false}
        />
      </Layout>
    )).toEqual(true)
  })

  it('should call getMovie and getMoviesGenre actions on component mount', () => {
    expect(getMovie).toHaveBeenCalledTimes(1)

    expect(getMovie).toBeCalledWith('pacific rim uprising')

    expect(getMoviesGenre).toHaveBeenCalledTimes(1)
  })
})