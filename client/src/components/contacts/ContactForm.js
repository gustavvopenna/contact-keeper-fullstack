import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  })

  const { name, email, phone, type } = contact

  const contactContext = useContext(ContactContext)
  const { addContact } = contactContext

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    addContact(contact)
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    })
  }

  return (
    <div>
      <h3 className="text-primary">Add contact</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={onChange}
        />

        <h4 className="text-primary">Contact Type</h4>

        <div>
          <input
            type="radio"
            name="type"
            checked={type === 'personal'}
            value="personal"
          />
          <label>Personal</label>
        </div>

        <div>
          <input
            type="radio"
            name="type"
            checked={type === 'professional'}
            value="professional"
            onChange={onChange}
          />
          <label>Professional</label>
        </div>

        <div>
          <input
            type="submit"
            value="Add contact"
            className="btn btn-dark btn-block"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
