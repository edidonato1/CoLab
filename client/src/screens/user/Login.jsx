import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormStyles from '../../stylesheets/FormStyles';


export default function Login(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <FormStyles>
      <h1>login</h1>
      <form className="form-main" onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData)
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
        <label> password
        <input
            type='password'
            name='password'
            autoComplete='current password'
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <div className="button-box">
          <button type="submit">send</button>
        </div>
        <p>need an account? <Link to='/register'>register</Link></p>
      </form>
    </FormStyles>
  )
}