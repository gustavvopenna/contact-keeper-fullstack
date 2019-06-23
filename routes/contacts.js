const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')
const Contact = require('../models/Contact')

// @route       GET api/contacts
// @desc        Get contacts
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    })
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route       POST api/contacts
// @desc        Create a new contact
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, phone, type } = req.body
    const { id } = req.user

    try {
      const newContact = new Contact({
        user: id,
        name,
        email,
        phone,
        type
      })

      const contact = await newContact.save()
      res.json(contact)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @route       PUT api/contacts/:id
// @desc        Upadate a contact
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, type } = req.body

  try {
    const contactFields = {}

    if (name) contactFields.name = name
    if (email) contactFields.email = email
    if (phone) contactFields.phone = phone
    if (type) contactFields.type = type

    let contact = await Contact.findById(req.params.id)

    if (!contact) {
      res.status(404).json('Contact not found')
    }

    if (contact.user.toString() !== req.user.id) {
      res.status(401).json({ msg: 'Not authorized' })
    }

    newContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    )

    res.json(newContact)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route       DELETE api/contacts/:id
// @desc        Delete a contact
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params

    let contact = await Contact.findById(id)

    if (!contact) {
      res.status(404).json({ msg: 'Contact could not be deleted' })
    }

    if (contact.user.toString() !== req.user.id) {
      res.status(401).json({ msg: 'Unauthorized to delete contact' })
    }

    contact = await Contact.findByIdAndRemove(req.params.id)

    res.status(200).json(contact)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ msg: 'Server Error' })
  }
})

module.exports = router
