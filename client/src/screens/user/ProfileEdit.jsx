import { useState, useEffect } from 'react'
import { addMedium } from '../../services/media';

export default function ProfileEdit(props) {
  const { media, loggedInUser } = props;

  const [newMedium, setNewMedium] = useState({})
  const [formData, setFormData] = useState({
    username: loggedInUser.username,
    img_url: loggedInUser.img_url,
    bio: loggedInUser.bio,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleAddMedium = async (e) => {
    e.preventDefault();
    await addMedium(newMedium, loggedInUser.id)
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
        <label> bio
        <input
            type='text'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
          />
        </label>
      </form>
      <form onSubmit={handleAddMedium}>
      <label> add a medium
          <select
            defaultValue='default'
            name='media'
            value={formData.media}
            onChange={(e) => setNewMedium(e.target.value)}
            >
            <option disabled value='default'>select</option>
            {media?.map(medium =>
            <option value={medium.id} key={medium.id}>{medium.name}</option>
            )}
          </select>
        </label>
        <button type="submit">add</button>
      </form>
      {/* <h1>{loggedInUser.media[0].id}</h1> */}
    </div>
  )
}

