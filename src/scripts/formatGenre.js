const formatGenre = (id, genres) => {
  for (let i in genres) {
    if (id === genres[i].id) {
      return genres[i].name
    }
  }

  return 'Other'
}

export default formatGenre