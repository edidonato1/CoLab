import React, {  useState } from 'react';
import { Redirect } from 'react-router-dom'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_BJqYEUDtQZODDSAmTYVCv");

const MediumRequest = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const sendEmail = event => {
    event.preventDefault();
    const { name, email, subject, message } = form;
    emailjs.send('service_e8z7gl7', 'template_tpaw8tz', {
      name: name,
      email: email,
      subject: subject,
      message: message
    })
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setSent(true)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };


  if (sent) {
    return <Redirect to="/" />
  }

  return (
    <div >
      <h1>Request</h1>
      <form onSubmit={sendEmail}>
        <div >
          <div >
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="full name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="email"
              value={form.email}
              placeholder="email address"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={form.subject}
            placeholder="subject"
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            name="message"
            value={form.message}
            placeholder="message"
            onChange={handleChange}
            required
          />
          <div >
            <button type="submit">send</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MediumRequest