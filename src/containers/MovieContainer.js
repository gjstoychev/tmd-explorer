import {connect} from 'react-redux'

import {getMovie} from '../reducers/movie'
import {getMoviesGenre} from '../reducers/genre'
import {movieSelector} from '../reducers/selectors'
import {setFilter} from '../reducers/popular'

import Movie from '../components/Movie'

export const mapStateToProps = (state) => ({
  movie: movieSelector(state),
  genres: state.genre.genres,
  loading: state.movie.loading
})

export const mapDispatchToProps = {
  getMovie,
  getMoviesGenre,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)