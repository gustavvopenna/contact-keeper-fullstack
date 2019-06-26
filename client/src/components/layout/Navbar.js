import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Icon.Calendar />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.protoTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Contact Keeper'
}

export default Navbar
