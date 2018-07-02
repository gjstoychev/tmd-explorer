import moment from 'moment'

import reducer from './popular'
import * as popular from './popular'

describe('(Redux Module) popular', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getPopularMovies', () => {
      const got = popular.getPopularMovies(2)
  
      const want = {
        type: popular.GET_POPULAR_MOVIES,
        payload: {
          request: {
            method: 'get',
            url: '/movie/popular?api_key=b3081c4ae1458c26d1714a83077e46c1&language=en-US&page=2'
          }
        }
      }
  
      expect(got).toEqual(want)
    })

    it('should return the action object on setFilter', () => {
      const got = popular.setFilter('searching')

      const want = {
        type: popular.SET_FILTER,
        query: 'searching'
      }

      expect(got).toEqual(want)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = popular.initialState
      expect(got).toEqual(want)
    })

    it('should return the previous state if no action matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})
      expect(got).toEqual(state)
    })

    it('should set loading state to true on GET_POPULAR_MOVIES', () => {
      const state = {
        popular: {results: [1, 2, 3]},
        loading: false
      }

      const got = reducer(state, {
        type: popular.GET_POPULAR_MOVIES
      })

      const want = {
        popular: {results: [1, 2, 3]},
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add results to the state on GET_POPULAR_MOVIES_SUCCESS', () => {
      const state = []
    
      const got = reducer(state, {
        type: popular.GET_POPULAR_MOVIES_SUCCESS,
        payload: {
          data: {
            results: [1, 2, 3, 4]
          }
        }
      })
    
      const want = {
        results: [1, 2, 3, 4],
        loading: false
      }
    
      expect(got).toEqual(want)
    })

    it('should set loading state to false on GET_POPULAR_MOVIES_FAILURE', () => {
      const state = {
        popular: {
          results: [1, 2, 3]
        }
      }

      const got = reducer(state, {
        type: popular.GET_POPULAR_MOVIES_FAILURE
      })

      const want = {
        popular: {
          results: [1, 2, 3]
        },
        loading: false
      }

      expect(got).toEqual(want)
    })

    it('should add filter to the state on SET_FILTER', () => {
      const state = {
        pages: [1, 2, 3]
      }

      const got = reducer(state, {
        type: popular.SET_FILTER,
        query: 'string'
      })

      const want = {
        pages: [1, 2, 3],
        query: 'string'
      }

      expect(got).toEqual(want)
    })
  })
})