import { useState, useParams } from 'react';
import ProfileStyles from '../../stylesheets/ProfileStyles';
import { addMedium, removeMedium } from '../../services/media';
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
    if (loggedInUser.media.length <= 4) {
      await addMedium(newMedium, loggedInUser.id)
      setUpdated(!updated)
    }
  }

  const handleRemoveMedium = async (mediumId, userId) => {
    await removeMedium(mediumId, userId);
    setUpdated(!updated);
  }

  const goBack = `<< back`

  return (
    <ProfileStyles>
      <h2 id="update-title">update profile</h2>
      <p onClick={() => setEditProfile(false)}>{goBack}</p>
      <div className="edit-profile-main">
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(loggedInUser.id, formData)
        }}>
          <div className="edit-left">
            <img className="profile-pic" src={loggedInUser?.img_url} />

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
                placeholder="required"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="edit-mid">
            <label htmlFor="bio"> bio
              <textarea
                type='text'
                name='bio'
                value={formData.bio}
                onChange={handleChange}
              />
            </label>
            <div className="button-box">
              <button className="profile-update" type="submit">save</button>
            </div>
          </div>
        </form>
        <form
          className="edit-right"
          onSubmit={handleAddMedium}>
          <div>
            <h5>your media</h5>
            <ul>
              {loggedInUser?.media.map(medium =>
                <div className="medium-list"> <li value={medium.id}>{medium.name}</li>
                  <small
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveMedium(medium.id, loggedInUser.id)
                    }}>remove</small></div>
              )}
            </ul>
          </div>
          <select
            defaultValue='default'
            name='media'
            value={formData.media}
            onChange={(e) => setNewMedium(e.target.value)}
          >
            <option disabled value='default'>add a medium</option>
            {media?.map(medium =>
              <option value={medium.id} key={medium.id}>{medium.name}</option>
            )}
          </select>
          <div className="button-box">
            <button className="profile-update" type="submit">add</button>
          </div>
        </form>
      </div>
    </ProfileStyles>
  )
}

