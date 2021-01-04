import { useState, useEffect } from 'react';
import { createCollaboration } from '../../services/collaborations';
import FormStyles from '../../stylesheets/FormStyles';


export default function ColabCreate(props) {
  const { loggedInUser, media, users } = props;

  const [showUsers, setShowUsers] = useState([])
  const [colabUsers, setColabUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    status: 1,
    users: [],
    media: []
  })

  useEffect(() => {
    if (!colabUsers.includes(loggedInUser)) {
      setColabUsers([loggedInUser])
    }
    
    searchUser !== ""
    ?
    setShowUsers(users.filter(user => 
        user.username.toLowerCase().includes(searchUser.toLowerCase())
    ))
      : 
      setShowUsers([])
  },[searchUser, loggedInUser])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      users: [colabUsers]
    }))
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
         <input
            type="text"
            value={searchUser}
            placeholder="we'll search as you type"
            onChange={(e) => setSearchUser(e.target.value)}
          />
        </label>
        <div className="show-users-container">
          {showUsers?.map(user => 
            <div
              key={user.id}
              className="user-thumbnail">
              <h3
                onClick={() => {
                  setColabUsers([...colabUsers, user])
                }}
              >{user.username}</h3>
              </div>
            )}
        </div>
        <label> media
          <select
            defaultValue="default"
          >
            <option disabled value="default"></option>
            {media.map(medium => 
              <option key={medium.id}>{medium.name}</option>
              )}
          </select>
          <input
            type="hidden"
            // value={}
          />
        </label>
      </form>
    </FormStyles>
  )
}