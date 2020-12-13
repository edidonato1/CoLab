import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import FormStyles from '../../stylesheets/FormStyles';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
init("user_BJqYEUDtQZODDSAmTYVCv");

const MediumRequest = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const history = useHistory();


  // third-party client-side email form requests developers to add user's desired medium to the application
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
    setSent(true);
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

  const goBack = `<< go back`

  return (
    <div >
      <FormStyles >
      <p className="go-back" onClick={() => history.push('/media')}>{goBack}</p>
        <h1>Request</h1>
        <form className="form-main" onSubmit={sendEmail}>
          <div >
            <label>name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>email
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>subject
            <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label>message
            <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <div className="button-box">
              <button type="submit">send</button>
            </div>
          </div>
        </form>
      </FormStyles>
    </div>
  )
}

export default MediumRequest