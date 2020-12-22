import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../../stylesheets/UserList';

export default function Users(props) {
  const { users, media } = props;

  const [showUsers, setShowUsers] = useState(users)
  const [mediaFilter, setMediaFilter] = useState([])
  const [searchUser, setSearchUser] = useState('')
  const [searchByUser, setSearchByUser] = useState(false)
  const [updatedFilter, setUpdatedFilter] = useState(false);

  useEffect(() => {
    searchUser.length ? setSearchByUser(true) : setSearchByUser(false)
    setShowUsers(users.filter(user =>
      user.media.some(medium =>
        mediaFilter.includes(medium.name)
      )
        ||
        searchByUser ?
        user.username.toLowerCase().includes(searchUser.toLowerCase())
        :
        null
    ))
  }, [users, mediaFilter, searchUser, searchByUser, updatedFilter])

  const removeFilter = (idx) => {
    mediaFilter.splice(idx, 1)
    setMediaFilter(mediaFilter)
    setUpdatedFilter(!updatedFilter);
  }

  // to collaborate, logged in user clicks a button on user's profile that takes you to a 
  // create collaboration page.  on that page, the user can choose the media, and from a 
  // select menu they can add more users.  The users's id, who they clicked to start the
  // collaboration will be stored in state and will be set to the initial state in the form of users 
  // to add to the collaboration

  return (
    <UserList>
      <h1>find users</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <select onChange={(e) => setMediaFilter([...mediaFilter, e.target.value])}>
          <option disabled value='default' >find by media</option>
          {media.map(medium =>
            <option value={medium.name}>{medium.name}</option>
          )}
        </select>
      </form>
      <ul className="media-filters">
        {mediaFilter.map((medium, idx) => 
          <div className="filter-list">
            <li>{medium}</li>
            <small onClick={() => removeFilter(idx)}>x</small>
          </div>
        )}
      </ul>
      {showUsers?.map(user =>
        <div className="user-thumbnail">
          <Link className="user-link" key={user.id} to={`/users/${user.id}`}>
            <img className="user-thumbnail-img" src={user.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
            <h3 className="thumbnail-username">{user.username}</h3>
          </Link>
          <h4>matching media:</h4>
          <ul>
            {user.media.filter(medium =>
              mediaFilter.includes(medium.name)
            ).map(medium =>
              <li>{medium.name}</li>
            )}
          </ul>
        </div>
      )}
    </UserList>
  )
}