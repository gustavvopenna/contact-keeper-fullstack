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
        type: 'personal',
        id: uuid.v4()
      },
      {
        name: 'Maribel Sosa',
        email: 'mary@gmail.com',
        phone: '55-4444-5555',
        type: 'personal',
        id: uuid.v4()
      },
      {
        name: 'Alan Ortega',
        email: 'ortega_alan@gmail.com',
        phone: '55-4411-3322',
        type: 'professional',
        id: uuid.v4()
      }
    ]
  }

  const [state, dispatch] = useReducer(ContactReducer, initialState)

  // Add contact

  const addContact = contact => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Current contact

  //Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
