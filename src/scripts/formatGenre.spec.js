import formatGenre from './formatGenre'

describe('(scripts) formatGenre', () => {
  it('should return a label with a provided id and array of items', () => {
    const genres = [
      {id: 'id1', name: 'comedy'},
      {id: 'id2', name: 'drama'},
      {id: 'id3', name: 'horror'}
    ]

    const want = [
      'comedy',
      'drama',
      'horror'
    ]

    for (const [index, value] of genres.entries()) {
      const got = formatGenre(value.id, genres)

      expect(got).toEqual(want[index])
    }
  })
})