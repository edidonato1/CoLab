import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import UserList from '../../stylesheets/UserList';
import FormStyles from '../../stylesheets/FormStyles';

export default function Users(props) {
  const { users, media, loggedInUser } = props;

  const [showUsers, setShowUsers] = useState(users)
  const [mediaFilter, setMediaFilter] = useState([])
  const [searchUser, setSearchUser] = useState('')
  const [searchByUser, setSearchByUser] = useState(false)
  const [updatedFilter, setUpdatedFilter] = useState(false);

  useEffect(() => {

    searchUser.length ? setSearchByUser(true) : setSearchByUser(false)  // only filter by user if user has typed in input field
    setShowUsers(users.filter(user =>
      user.media.some(medium =>
        mediaFilter.includes(medium.name)
      )
        ||
        searchByUser ?
        user.username.toLowerCase().includes(searchUser.toLowerCase()) // searchByUser filters users regardless of current media filters
        :
        null
    ))
  }, [mediaFilter, users, searchUser, searchByUser, updatedFilter])

  const removeFilter = (idx) => { // removes previously added media added to search
    mediaFilter.splice(idx, 1)
    setMediaFilter(mediaFilter)
    setUpdatedFilter(!updatedFilter);
  }

  return (
    <UserList mediaFilter={mediaFilter}>
      <div className="search-area">
        <h1>find users</h1>
        <FormStyles>
          <form className="form-main" id="user-filter" onSubmit={(e) => e.preventDefault()}>
            <label
              className="search"
              id="username">search username
                <FontAwesomeIcon
                id="search-icon"
                icon={faSearch} />
              <input
                name="user-search"
                id="user-search"
                type="text"
                value={searchUser}
                placeholder=" we'll search as you type"
                onChange={(e) => setSearchUser(e.target.value)}
              />
            </label>

            <label className="search"> filter by media
              <select
                defaultValue="default"
                id="user-media-filter"
                onChange={(e) => setMediaFilter([...mediaFilter, e.target.value])}>
                <option disabled value='default' ></option>
                {media.map(medium =>
                  <option key={medium.id}> {medium.name} </option>
                )}
              </select>
            </label>
          </form>
        </FormStyles>
        <ul className="media-filters">
          {mediaFilter.map((medium, idx) =>
            <div
              key={idx}
              className="filter-list">
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
          <div
            key={user.id}
            className="user-thumbnail">
            <Link className="user-link"  to={`/users/${user?.id}`}>
              <img
                alt="user thumbnail"
                className="user-thumbnail-img"
                src={user?.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
              <span id="thumbnail-username-container">
                <h3 className="thumbnail-username">{user?.username}</h3>
                {loggedInUser?.id === user.id ?
                  <FontAwesomeIcon className="icon" icon={faStar} />
                  :
                  <></>
                }
              </span>
            </Link>
            <div className="matches">
              <h4 className="matches-title">matches:</h4>
              <ul className="matches-ul">
                {user.media.filter(medium =>
                  mediaFilter.includes(medium.name)
                ).map(medium =>
                  <li key={ medium.id }className="matches-li">{medium.name}</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </UserList>
  )
}