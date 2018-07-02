// Actions
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS'
export const GET_POPULAR_MOVIES_FAILURE = 'GET_POPULAR_MOVIES_FAILURE'

export const SET_FILTER = 'SET_FILTER'

// Action Creators
export const getPopularMovies = pageNumber => {
  return {
    type: GET_POPULAR_MOVIES,
    payload: {
      request: {
        method: 'get',
        url: `/movie/popular?api_key=b3081c4ae1458c26d1714a83077e46c1&language=en-US&page=${pageNumber}`
      }
    }
  }
}

export const setFilter = (query) =>({
  type: SET_FILTER,
  query
})

// Reducer
export const initialState = {
  results: [],
  loading: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        loading: true
      }

    case GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        results: action.payload.data.results,
        loading: false
      }

    case GET_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        loading: false
      }

    case SET_FILTER:
      return {
        ...state,
        query: action.query
      }

    default:
      return state
  }
}