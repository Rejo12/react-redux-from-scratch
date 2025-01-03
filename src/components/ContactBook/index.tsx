import { Button } from '@mui/material'
import React, { useState } from 'react'

// Create a simple Contact Book app(https://reactpractice.dev/exercise/create-a-simple-contact-book-app/)

type ContactDetails = {
  id: number
  name: string
  city: string
  isEditting: boolean
}[]

const ContactBook = () => {
  const [contactDetails, setContactDetails] = useState<ContactDetails>([])
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [updatedName, setUpdatedName] = useState('')
  const [updatedCity, setUpdatedCity] = useState('')
  const [isEditable, setIsEditable] = useState(true)

  const handleAddToContact = (e: React.FormEvent<HTMLFormElement>) => {
    if (name.length === 0 || city.length === 0) {
      return
    } else {
      e.preventDefault()
      setContactDetails((prevContact) => [
        ...prevContact,
        { id: new Date().getTime(), name, city, isEditting: false },
      ])
      setName('')
      setCity('')
    }
  }

  const handleEdit = (id: number, index: number) => {
    let tmp = [...contactDetails]
    tmp[index].isEditting = true
    setUpdatedName(tmp[index].name)
    setUpdatedCity(tmp[index].city)
    setContactDetails(tmp)
    setIsEditable(false)
  }

  const handleUpdateContact = (
    index: number,
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    let tmp = [...contactDetails]
    tmp[index].isEditting = false
    tmp[index].name = updatedName
    tmp[index].city = updatedCity
    setContactDetails(tmp)
    setIsEditable(true)
  }

  const handleDelete = (index: number) => {
    let tmp = [...contactDetails]
    tmp.splice(index, 1)
    setContactDetails(tmp)
  }

  console.log({ contactDetails })
  return (
    <>
      <div>
        <div className="add-contact-layout">
          <div>
            <h3>Add a new contact</h3>
            <form onSubmit={handleAddToContact}>
              <label htmlFor="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="contact-city">City</label>
              <input
                type="text"
                id="contact-city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button disabled={name.length === 0 || city.length === 0}>
                Add contact
              </button>
            </form>
          </div>
        </div>
        {contactDetails.length > 0 && (
          <div>
            {contactDetails.map((item, index) =>
              item.isEditting === false ? (
                <div className="add-contact-layout">
                  <div>
                    <h4>{item.name}</h4>
                    <p>City: {item.city}</p>
                    <span>
                      <Button
                        onClick={(e) => handleEdit(item.id, index)}
                        disabled={!isEditable}
                      >
                        Edit
                      </Button>
                      <Button onClick={(e) => handleDelete(index)}>
                        Delete
                      </Button>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="add-contact-layout">
                  <form onSubmit={(e) => handleUpdateContact(index, e)}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                    <label htmlFor="contact-city">City</label>
                    <input
                      type="text"
                      id="contact-city"
                      value={updatedCity}
                      onChange={(e) => setUpdatedCity(e.target.value)}
                    />
                    <button
                      disabled={
                        updatedName.length === 0 || updatedCity.length === 0
                      }
                    >
                      Update
                    </button>
                  </form>
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ContactBook
