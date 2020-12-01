import { useState } from 'react';
import { Link } from 'react-router-dom';


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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData)
    }}>
      <h1>login</h1>
      <label> username
        <input 
          type='text'
          name='username'
          value={formData.username}
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
      <button type="submit">send</button>
      <p>need an account?<Link to='/register'>register</Link></p>


      </form>
  )
}