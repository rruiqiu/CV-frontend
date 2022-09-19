import React, { useState } from 'react'
import Axios from 'axios'

const ConotactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (event) => {
    Axios.post("https://ps-portfolio-backend.herokuapp.com/information", {
      name: contact.name,
      email: contact.email,
      message: contact.message
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    event.preventDefault()
    alert("Your information has been submitted")
    setContact({
      name: "",
      email: "",
      message: ""
    })
  }
  function handleChange (event) {
    const { name, value } = event.target

    setContact(prevContact => {
      return {
        ...prevContact,
        [name]: value
      }
    })
  }

  return (
    <div>
      <p id="form-text">Want to discuss a project, ask a question, or just say hi? Leave me a message and I'll make sure to get back to you.</p>
      <form action="" method='POST' id="contact-form">
        <input type="text" onChange={handleChange} name="name" value={contact.name} placeholder="NAME" /><br />
        <input type="text" onChange={handleChange} name='email' value={contact.email} placeholder="Email" /><br />
        <textarea name="message" onChange={handleChange} id="" cols="30" rows="10" value={contact.message} placeholder="Please enter your text here"></textarea>
        <button type='submit' className='formButton' onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}
export default ConotactForm