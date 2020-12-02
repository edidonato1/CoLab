import { useState, useEffect } from 'react'

export default function ProfileEdit(props) {
  const { media, loggedInUser } = props;

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
    <div>
      <h2>update profile</h2>
      <form>
        <label> username
        <input
            type='text'
            name='username'
            value={formData.username}
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

      </form>
    </div>
  )
}

{/* <label> media
<select
  name='media'
  value={formData.media}
  onChange={handleChange}
>{media.map(medium => 
  <option value={medium.id} key={medium.id}>{medium.name}</option>
)}
</select> 
</label> */}