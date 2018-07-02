import truncateString from './truncateString'

describe('(scripts) truncateString', () => {
  it('should truncate the provided string to the limit', () => {
    const strings = [
      'Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship. A TV adaptation of Margaret Atwood novel.',
      'Shorter string'
    ]

    const want = [
      'Set in a dystopian future...',
      'Shorter string'
    ]

    for (const [index, value] of strings.entries()) {
      const got = truncateString(value, 25)

      expect(got).toEqual(want[index])
    }
  })
})