import { useState } from 'react';
import ProfileStyles from '../../stylesheets/ProfileStyles';
import { addMedium } from '../../services/media';
import { putUser } from '../../services/users';

export default function ProfileEdit(props) {
  const { media, loggedInUser, setEditProfile, updated, setUpdated } = props;

  const [newMedium, setNewMedium] = useState({})
  const [formData, setFormData] = useState({
    username: loggedInUser.username,
    img_url: loggedInUser.img_url,
    bio: loggedInUser.bio,
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (id, data) => {
    await putUser(id, data);
    setEditProfile(false)
    setUpdated(!updated)
  }

  const handleAddMedium = async (e) => {
    e.preventDefault();
    await addMedium(newMedium, loggedInUser.id)
  }

  const goBack = `<< back`

  return (
    <ProfileStyles>
      <h2>update profile</h2>
      <p onClick={() => setEditProfile(false)}>{goBack}</p>
      <img className="profile-pic" src={ loggedInUser?.img_url}/>
      <div className="edit-profile-main">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(loggedInUser.id, formData)
        }}>
          <div className="edit-left">

            <label> image url
        <input
                type='text'
                name='img_url'
                value={formData.img_url}
                onChange={handleChange}
              />
            </label>
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
                required
              />
            </label>
          </div>
          <div className="edit-mid">
            <label> bio
        <textarea
                type='text'
                name='bio'
                value={formData.bio}
                onChange={handleChange}
              />
            </label>
            <button type="submit">save</button>
          </div>
        </form>
        <div className="edit-right">
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
        </div>
      </div>
    </ProfileStyles>
  )
}

