import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-feather'

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Icon.Calendar />
        {title}
      </h1>
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
