import {combineReducers} from 'redux'

import popular from './popular'
import movie from './movie'
import genre from './genre'

const rootReducer = combineReducers({
  popular,
  movie,
  genre
})

export default rootReducer