import React from 'react'
import {shallow} from 'enzyme'

import Badge from '../Badge'
import GenreBadger from './GenreBadger'

describe('(Component) GenreBadger', () => {
  it('should render the component with provided ids and genres arrays', () => {
    const ids = [1, 12, 9]
    const genres = [
      {id: 1, name: 'One'},
      {id: 9, name: 'Nine'},
      {id: 12, name: 'Twelve'}
    ]

    const wrapper = shallow(
      <GenreBadger
        ids={ids}
        genres={genres}
      />
    )

    expect(wrapper.equals(
      <h6>
        <Badge style={{margin: '2px'}}>One</Badge>
        <Badge style={{margin: '2px'}}>Twelve</Badge>
        <Badge style={{margin: '2px'}}>Nine</Badge>
      </h6>
    )).toEqual(true)
  })

  it('should render the component more loosy', () => {
    const ids = [2, 3]
    const genres = [
      {id: 2, name: 'Two'},
      {id: 3, name: 'Three'}
    ]

    const wrapper = shallow(
      <GenreBadger
        ids={ids}
        genres={genres}
        loosy
      />
    )

    expect(wrapper.equals(
      <h6>
        <Badge style={{margin: '20px'}}>Two</Badge>
        <Badge style={{margin: '20px'}}>Three</Badge>
      </h6>
    )).toEqual(true)
  })
})