import React from 'react'
import {shallow} from 'enzyme'
import {Link} from 'react-router-dom'

import Search from '../Search'
import Navbar from './Navbar'
import './Navbar.css'

describe('(Component) Navbar', () => {
  it('should render the component', () => {
    const setFilter = jest.fn()

    const wrapper = shallow(
      <Navbar setFilter={setFilter} />
    )

    expect(wrapper.equals(
        <div className='container-fluid text-center nav'>
        <Link to={{pathname: '/'}}>
          <h1 className='title'><span className='title-green'>TMD</span> Explorer</h1>
        </Link>
        <div className='search'>
          <Search setFilter={setFilter} />
        </div>
      </div>
    )).toEqual(true)
  })
})