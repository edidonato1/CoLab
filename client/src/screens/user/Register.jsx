import { useState, useEffect } from 'react'
import { getAllMedia } from '../../services/media';

export default function Register(props) {
  const [media, setMedia] = useState([])
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

  useEffect(() => {
    const fetchMedia = async () => {
      const mediaData = await getAllMedia();
      setMedia(mediaData);
    }
    fetchMedia();
  }, [])

  
  return (
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
      <label> media
        <select
          name='media'
          value={formData.media}
          onChange={handleChange}
        >{media.map(medium => 
          <option>{medium.name}</option>
        )}
        </select> 
      </label>
      <button type="submit">send</button>
    </form>
  )

}