import {createSelector} from 'reselect'

export const popularSelector = state => state.popular.results

export const filterSelector = state => state.popular.query

export const movieSelector = state => state.movie.results[0]

export const filteredMoviesSelector = createSelector(
  [popularSelector, filterSelector],
  (movies, filter) => {
    if (filter) {
      return Object.values(movies).filter(i =>
        i.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
      )
    }

    return Object.keys(movies).map(i => movies[i])
  }
)
