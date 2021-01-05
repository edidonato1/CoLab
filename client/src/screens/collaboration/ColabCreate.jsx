import { useState, useEffect } from 'react';
import { createCollaboration } from '../../services/collaborations';
import FormStyles from '../../stylesheets/FormStyles';
import ColabStyles from '../../stylesheets/Collaboration';


export default function ColabCreate(props) {
  const { loggedInUser, media, users } = props;

  const [refresh, setRefresh] = useState(false) // refresh to update state of array data
  const [showUsers, setShowUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    status: 1,
    users: [],
    media: []
  })

  useEffect(() => {

    if (!formData.users.includes(loggedInUser)) {
      setFormData({ ...formData, users: [loggedInUser] }) // initialize array to include loggedInUser
    }

    searchUser !== ""
      ?
      setShowUsers(users.filter(user => user.username.toLowerCase().includes(searchUser.toLowerCase())))
      :
      setShowUsers([])

  }, [searchUser, loggedInUser, formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const removeFilter = (field, idx) => { // removes previously added media added to search
    formData[field].splice(idx, 1)
    setRefresh(!refresh);
  }

  return (

    <FormStyles>
      <h1>new collaboration</h1>
      <div className="colab-create-main">
        <form>
          <label> title
          <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label> media
          <select
              defaultValue="default"
              onChange={(e) => {
                formData.media.push(e.target.value)
                setRefresh(!refresh)
              }}
            >
              <option disabled value="default"></option>
              {media.map(medium =>
                <option key={medium.name}>{medium.name}</option>
              )}
            </select>
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
              <li
                key={user.username}
                className="user-option"
                onClick={() => {
                  if (!formData.users.includes(user) && user.id !== loggedInUser?.id) {
                    formData.users.push(user)
                    setRefresh(!refresh)
                  }
                }}
              >{user.username}</li>
            )}
          </div>
        </form>

        <div className="colab-preview">
          <div className="added-media">
            <h3>title: {formData.title}</h3>
            <h3>media: </h3>
            <ul className="media-filters">
              {formData.media.map((medium, idx) =>
                <div key={medium.id} className="filter-list">
                  <li className="filter-medium-name">{medium}</li>
                  <small className="remove-filter" onClick={() => removeFilter( 'media', idx)}>x</small>
                </div>
              )}
            </ul>
          </div>
          <div className="added-users">
            <h3>collaborators: </h3>
            <ul className="media-filters">
              {formData.users.map((user, idx) => 
                <div className="filter-list">
                  <li className="added-users-li"> {user?.username} </li>
                  {user?.id !== loggedInUser?.id ? 
                  <small className="remove-filter" onClick={() => removeFilter('users', idx)} >x</small>
                    : 
                    <></>
                }
                </div>
                  )}
            </ul>
          </div>



        </div>
      </div>
    </FormStyles >
  )
}