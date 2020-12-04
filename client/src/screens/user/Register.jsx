import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormStyles from '../../stylesheets/FormStyles';

export default function Register(props) {
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
      <h1>register</h1>
      <form className="form-main" onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}>
        <label> username
        <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            autoFocus
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
            autoComplete='current password'
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
        <div className="button-box">
        <button type="submit">send</button>
        </div>
        <p>already have an account? <Link to='/login'>log in</Link></p>
      </form>
    </FormStyles>
  )

}