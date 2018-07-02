// Actions
export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE'

// Action Creators
export const getMovie = query => {
  return {
    type: GET_MOVIE,
    payload: {
      request: {
        method: 'get',
        url: `/search/movie?api_key=b3081c4ae1458c26d1714a83077e46c1&query=${query}`
      }
    }
  }
}

// Reducer
export const initialState = {
  results: [],
  loading: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIE:
      return {
        ...state,
        loading: true
      }

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        results: action.payload.data.results,
        loading: false
      }

    case GET_MOVIE_FAILURE:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}