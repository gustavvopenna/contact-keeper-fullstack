import React from 'react'
import * as Icon from 'react-feather'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
  const { name, email, phone, type } = contact

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        {'  '}
        <span
          className={
            'badge ' + (type === 'personal' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <Icon.Mail size={18} />
            {'  '} {email}
          </li>
        )}
      </ul>

      <ul>
        {phone && (
          <li>
            <Icon.Phone size={18} />
            {'  '} {phone}
          </li>
        )}
      </ul>
      <button className="btn btn-dark btn-sm">Edit</button>
      <button className="btn btn-danger btn-sm">Delete</button>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem
