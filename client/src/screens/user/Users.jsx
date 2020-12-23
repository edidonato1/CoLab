import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../../stylesheets/UserList';
import FormStyles from '../../stylesheets/FormStyles';

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
    <UserList mediaFilter={mediaFilter}>
      <div className="search-area">
        <h1>find users</h1>
        <FormStyles>
          <form className="form-main" id="user-filter" onSubmit={(e) => e.preventDefault()}>
            <label id="username">search username
          <input
                name="user-search"
                id="user-search"
                type="text"
                value={searchUser}
                placeholder=" we'll search as you type"
                onChange={(e) => setSearchUser(e.target.value)}
              />
            </label>
            <label> filter by media
              <select
                defaultValue="default"
                id="user-media-filter"
                onChange={(e) => setMediaFilter([...mediaFilter, e.target.value])}>
                <option disabled value='default' ></option>
                {media.map(medium =>
                  <option value={medium.name}>{medium.name}</option>
                )}
              </select>
            </label>
          </form>
        </FormStyles>
        <ul className="media-filters">
          {mediaFilter.map((medium, idx) =>
            <div className="filter-list">
              <li className="filter-medium-name">{medium}</li>
              <small className="remove-filter" onClick={() => removeFilter(idx)}>x</small>
            </div>
          )}
        </ul>
      </div>
      <div className="show-users-container">
        {!showUsers.length ? 
          <p>no users match criteria</p>
          : 
          <></>
          }
        {showUsers?.map(user =>
          <div className="user-thumbnail">
            <Link className="user-link" key={user.id} to={`/users/${user.id}`}>
              <img className="user-thumbnail-img" src={user.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
              <h3 className="thumbnail-username">{user.username}</h3>
            </Link>
            <div className="matches">
              <h4 className="matches-title">matches:</h4>
              <ul className="matches-ul">
                {user.media.filter(medium =>
                  mediaFilter.includes(medium.name)
                ).map(medium =>
                  <li className="matches-li">{medium.name}</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </UserList>
  )
}