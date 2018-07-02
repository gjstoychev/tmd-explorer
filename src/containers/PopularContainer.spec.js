import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'
import configureMockStore from 'redux-mock-store'

import PopularContainer from './PopularContainer'
import Popular from '../components/Popular'

describe('(Redux Container) PopularContainer', () => {
  let container, component

  beforeEach(() => {
    const store = configureMockStore()({
      genre: {
        genres:[
          {id: 'id1', name: 'action'},
          {id: 'id2', name: 'drama'}
        ]
      },
      popular: {
        results: [
          {id: 'id1', title: 'Brazil', rating: 9},
          {id: 'id2', title: 'All I Can', rating: 10}
        ],
        loading: true
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <PopularContainer />
        </MemoryRouter>
      </Provider>
    )

    container = wrapper.find(PopularContainer)
    component = container.find(Popular)
  })

  it('should render the component with the provided results', () => {
    const got = component.prop('movies')

    const want = [
      {id: 'id1', title: 'Brazil', rating: 9},
      {id: 'id2', title: 'All I Can', rating: 10}
    ]

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

  it('should render the component with the search query', () => {
    const store = configureMockStore()({
      genre: {
        genres:[
          {id: 'id1', name: 'action'},
          {id: 'id2', name: 'drama'}
        ]
      },
      popular: {
        results: [
          {id: 'id1', title: 'Brazil', rating: 9},
          {id: 'id2', title: 'All I Can', rating: 10}
        ],
        loading: true,
        query: 'azi'
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <PopularContainer />
        </MemoryRouter>
      </Provider>
    )

    const container = wrapper.find(PopularContainer)
    const component = container.find(Popular)
    const got = component.prop('query')

    expect(got).toEqual('azi')
  })
})