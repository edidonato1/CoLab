import { useState, useEffect } from 'react';
import { createCollaboration } from '../../services/collaborations';
import FormStyles from '../../stylesheets/FormStyles';


export default function ColabCreate(props) {
  const { loggedInUser, media, users } = props;
  const [formData, setFormData] = useState({
    title: '',
    status: 1,
    user_id: Number(loggedInUser?.id),
    users: [loggedInUser],
    media: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSelect = (e) => {
    formData.users.push(e.target.value)
  }

  return (
    <FormStyles>
      <h1>new collaboration</h1>
      <form>
        <label> title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>

        <label> users
          <select>
            {users.map(user => 
              <option value={user} onClick={handleSelect}>{user.username}</option>
              )}
          </select>
          {formData.users?.map(user => 
            <li>{user?.username}</li>
            )}
        </label>
      </form>
    </FormStyles>
  )
}