import { useState, useEffect } from 'react'
import FormStyles from '../../stylesheets/FormStyles';

export default function Register(props) {
  const { media } = props;
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    img_url: '',
    bio: '',
    media: []
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <FormStyles>

      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}>
        <h1>register</h1>
        <label> username
        <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label> email
        <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label> password
        <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label> image url
        <input
            type='text'
            name='img_url'
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <label> bio
        <input
            type='text'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
          />
        </label>

        <button type="submit">send</button>
      </form>
    </FormStyles>
  )

}