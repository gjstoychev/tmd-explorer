// Actions
export const GET_MOVIES_GENRE = 'GET_MOVIES_GENRE'
export const GET_MOVIES_GENRE_SUCCESS = 'GET_MOVIES_GENRE_SUCCESS'

// Action Creators
export const getMoviesGenre = () => {
  return {
    type: GET_MOVIES_GENRE,
    payload: {
      request: {
        method: 'get',
        url: '/genre/movie/list?api_key=b3081c4ae1458c26d1714a83077e46c1'
      }
    }
  }
}

// Reducer
export const initialState = {
  genres: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_MOVIES_GENRE_SUCCESS:
      const {genres} = action.payload.data

      return {
        ...state,
        genres: genres
      }

    default:
      return state
  }
}