import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        name: 'Gustavo Peña',
        email: 'gustavo.pema@gmail.com',
        phone: '55-6376-8310',
        type: 'personal'
      },
      {
        name: 'Maribel Sosa',
        email: 'mary@gmail.com',
        phone: '55-4444-5555',
        type: 'personal'
      },
      {
        name: 'Alan Ortega',
        email: 'ortega_alan@gmail.com',
        phone: '55-4411-3322',
        type: 'professional'
      }
    ]
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  // Add contact

  // Current contact

  //Clear current contact

  // Update contact

  // Remove contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
