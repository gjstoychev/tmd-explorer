import moment from 'moment'

import reducer from './movie'
import * as movie from './movie'

describe('(Redux Module) movie', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getMovie', () => {
      const got = movie.getMovie('the-game')
  
      const want = {
        type: movie.GET_MOVIE,
        payload: {
          request: {
            method: 'get',
            url: '/search/movie?api_key=b3081c4ae1458c26d1714a83077e46c1&query=the-game'
          }
        }
      }
  
      expect(got).toEqual(want)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = movie.initialState
      expect(got).toEqual(want)
    })

    it('should return the previous state if no action matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})
      expect(got).toEqual(state)
    })

    it('should set loading state to true on GET_MOVIE', () => {
      const state = {
        movie: {results: [1, 2, 3]},
        loading: false
      }

      const got = reducer(state, {
        type: movie.GET_MOVIE
      })

      const want = {
        movie: {results: [1, 2, 3]},
        loading: true
      }

      expect(got).toEqual(want)
    })

    it('should add results to the state on GET_MOVIE_SUCCESS', () => {
      const state = []
    
      const got = reducer(state, {
        type: movie.GET_MOVIE_SUCCESS,
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

    it('should set loading state to false on GET_MOVIE_FAILURE', () => {
      const state = {
        movie: {results: [1, 2, 3]}
      }

      const got = reducer(state, {
        type: movie.GET_MOVIE_FAILURE
      })

      const want = {
        movie: {results: [1, 2, 3]},
        loading: false
      }

      expect(got).toEqual(want)
    })
  })
})