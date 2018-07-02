import {connect} from 'react-redux'

import {getMoviesGenre} from '../reducers/genre'
import {getPopularMovies, setFilter} from '../reducers/popular'
import {filteredMoviesSelector, filterSelector} from '../reducers/selectors'

import Popular from '../components/Popular'

export const mapStateToProps = (state) => ({
  movies: filteredMoviesSelector(state),
  query: filterSelector(state),
  genres: state.genre.genres,
  loading: state.popular.loading
})

export const mapDispatchToProps = {
  getPopularMovies,
  getMoviesGenre,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)