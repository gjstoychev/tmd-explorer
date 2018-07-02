import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Search from '../Search'

import './Navbar.css'

const Navbar = ({setFilter}) => (
  <div className='container-fluid text-center nav'>
    <Link to={{pathname: '/'}}>
      <h1 className='title'><span className='title-green'>TMD</span> Explorer</h1>
    </Link>
    <div className='search'>
      <Search setFilter={setFilter} />
    </div>
  </div>
)

Navbar.propTypes = {
  setFilter: PropTypes.func
}

export default Navbar
