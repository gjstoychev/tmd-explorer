import {createStore, applyMiddleware} from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    responseType: 'json'
  })
  
  const configureStore = () => {
    return createStore(
      rootReducer,
      applyMiddleware(thunk, axiosMiddleware(client))
    )
  }
  
  export default configureStore
  