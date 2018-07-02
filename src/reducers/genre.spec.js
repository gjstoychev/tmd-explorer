import moment from 'moment'

import reducer from './genre'
import * as genre from './genre'

describe('(Redux Module) genre', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getMovie', () => {
      const got = genre.getMoviesGenre()
  
      const want = {
        type: genre.GET_MOVIES_GENRE,
        payload: {
          request: {
            method: 'get',
            url: '/genre/movie/list?api_key=b3081c4ae1458c26d1714a83077e46c1'
          }
        }
      }
  
      expect(got).toEqual(want)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const got = reducer(undefined, {})
      const want = genre.initialState

      expect(got).toEqual(want)
    })

    it('should return the previous state if no action matched', () => {
      const state = {fake: 'state'}
      const got = reducer(state, {type: '@@@@@@@'})
      expect(got).toEqual(state)
    })

    it('should add genres to the state on GET_MOVIES_GENRE_SUCCESS', () => {
      const state = []
    
      const got = reducer(state, {
        type: genre.GET_MOVIES_GENRE_SUCCESS,
        payload: {
          data: {
            genres: [14, 23, 32, 131]
          }
        }
      })
    
      const want = {
        genres: [14, 23, 32, 131]
      }
    
      expect(got).toEqual(want)
    })
  })
})