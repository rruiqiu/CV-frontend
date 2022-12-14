import React, { useState } from 'react'
import Axios from 'axios'

const ConotactForm = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (event) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    Axios.post("https://ps-portfolio-backend.herokuapp.com/information", {
      name: contact.name,
      email: contact.email,
      message: contact.message,
      date: dateTime
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    event.preventDefault()
    alert("Your information has been submitted")
    setContact({
      name: "",
      email: "",
      message: "",
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
      <p id="form-text"></p>
      <form action="" method='POST' id="contact-form" >
        <input type="text" onChange={handleChange} name="name" value={contact.name} placeholder="Name" /><br />
        <input type="text" onChange={handleChange} name='email' value={contact.email} placeholder="Email" /><br />
        <textarea name="message" onChange={handleChange} id="" cols="30" rows="10" value={contact.message} placeholder="Leave me a message here, I will make sure to get in touch with you soon!"></textarea>
        <button type='submit' className='formButton' onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}
export default ConotactForm