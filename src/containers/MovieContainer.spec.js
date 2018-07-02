import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import MovieContainer from './MovieContainer'
import Movie from '../components/Movie'

describe('(Redux Container) MovieContainer', () => {
  let container, component

  beforeEach(() => {
    const location = {
      pathname: '/movie/268896-pacific-rim-uprising'
    }

    const store = configureMockStore()({
      movie: {
        results: [
          {id: 'id1', title: 'Brazil', rating: 9},
          {id: 'id2', title: 'All I Can', rating: 10}
        ],
        loading: true
      },
      genre: {
        genres:[
          {id: 'id1', name: 'action'},
          {id: 'id2', name: 'drama'}
        ]
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MovieContainer location={location} />
        </MemoryRouter>
      </Provider>
      )

    container = wrapper.find(MovieContainer)
    component = container.find(Movie)
  })

  it('should render the component with the first of the provided results', () => {
    const got = component.prop('movie')

    const want = {id: 'id1', title: 'Brazil', rating: 9}

    expect(got).toEqual(want)
  })

  it('should render the component with the provided genres', () => {
    const got = component.prop('genres')

    const want = [
      {id: 'id1', name: 'action'},
      {id: 'id2', name: 'drama'}
    ]

    expect(got).toEqual(want)
  })

  it('should render the component with the provided loading statement', () => {
    const got = component.prop('loading')

    expect(got).toEqual(true)
  })
})