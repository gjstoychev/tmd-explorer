import {popularSelector, movieSelector, filterSelector, filteredMoviesSelector} from './selectors'

describe('(Selectors)', () => {
  describe('popularSelector', () => {
    it('should return state popular results', () => {
      const state = {
        popular: {
          results: [
            {id: '1', title: 'Fargo'},
            {id: '2', title: '12 Monkeys'}
          ]
        }
      }

      const got = popularSelector(state)

      const want = [
        {id: '1', title: 'Fargo'},
        {id: '2', title: '12 Monkeys'}
      ]

      expect(got).toEqual(want)
    })
  })

  describe('movieSelector', () => {
    it('should return the first state movie result', () => {
      const state = {
        movie: {
          results: [
            {id: '1', title: 'Rambo'},
            {id: '2', title: 'Seven'},
            {id: '3', title: 'Die Hard'}
          ]
        }
      }

      const got = movieSelector(state)
      const want = {id: '1', title: 'Rambo'}
      expect(got).toEqual(want)
    })
  })

  describe('filterSelector', () => {
    it('should return state popular query', () => {
      const state = {
        popular: {
          query: 'querty'
        }
      }

      const got = filterSelector(state)
      expect(got).toEqual('querty')
    })
  })

  describe('filteredMoviesSelector', () => {
    it('should return all results without filter', () => {
      const state = {
        popular: {
          results: [
            {id: '1', title: 'Fargo'},
            {id: '2', title: '12 Monkeys'}
          ],
          query: ''
        }
      }

      const got = filteredMoviesSelector(state)

      const want = [
        {id: '1', title: 'Fargo'},
        {id: '2', title: '12 Monkeys'}
      ]

      expect(got).toEqual(want)
    })

    it('should return only filtered results', () => {
      const state = {
        popular: {
        results: [
            {id: '1', title: 'Fargo'},
            {id: '2', title: '12 Monkeys'}
        ],
        query: '12'
        }
      }
    
      const got = filteredMoviesSelector(state)
      const want = [{id: '2', title: '12 Monkeys'}]
      expect(got).toEqual(want)
    })
  })
})