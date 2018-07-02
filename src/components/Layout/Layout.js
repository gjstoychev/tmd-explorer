import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'

import './Layout.css'

const Layout = ({children, header, setFilter}) => (
  <div className='wrapper'>
    <Navbar setFilter={setFilter} />
    {header && (
      <div className='container-fluid text-center padding'>
        <h1>{header}</h1>
      </div>
    )}
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  setFilter: PropTypes.func
}

export default Layout