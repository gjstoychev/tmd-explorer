import React from 'react'
import {Link} from 'react-router-dom'
import {shallow} from 'enzyme'

import Search from '../Search'
import Navbar from '../Navbar'
import Layout from './Layout'

describe('(Component) Layout', () => {
  it('should render the component with a provided header', () => {
    const children = <div>simple</div>
    const header = 'Popular Movies'
    const setFilter = jest.fn()
    
    const wrapper = shallow(
        <Layout header={header} setFilter={setFilter}>
          {children}
        </Layout>
    )

    expect(wrapper.equals(
        <div className='wrapper'>
          <Navbar setFilter={setFilter} />
          <div className='container-fluid text-center padding'>
            <h1>Popular Movies</h1>
          </div>
          {children}
        </div>
    )).toEqual(true)
  })

  it('should render the component without a title', () => {
    const setFilter = jest.fn()
    const children = <div>simple</div>
    
    const wrapper = shallow(
      <Layout setFilter={setFilter}>
        {children}
      </Layout>
    )

    expect(wrapper.equals(
      <div className='wrapper'>
        <Navbar setFilter={setFilter} />
        {children}
      </div>
    )).toEqual(true)
  })
})