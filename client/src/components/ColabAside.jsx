import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/users';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserAside from '../stylesheets/UserAside';
import UserInfo from '../components/modal/UserInfo';


export default function ColabAside(props) {
  const [searchUser, setSearchUser] = useState('');
  const [showUsers, setShowUsers] = useState([]);
  const [open, setOpen] = useState(null);

  const { collaboration, users } = props

  useEffect(() => {
    searchUser !== ''
      ?
      setShowUsers(users?.filter(user =>
        user.username.toLowerCase().includes(searchUser.toLowerCase())))
      :
      setShowUsers([])
  }, [searchUser])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <UserAside >
      {open ?
        <UserInfo
          collaboration={collaboration}
          open={open}
          setOpen={setOpen}
        />
        :
        <></>
      }
      <div className="user-media" id="colab-aside-main">
        <h4>collaborators</h4>
        <ul>
          {collaboration?.users.map(user =>
            <li>{user.username}</li>
          )}
        </ul>
        <h4>media</h4>
        <ul>
          {collaboration?.media.map(medium =>
            <li>{medium.name}</li>
          )}
        </ul>
        <form onSubmit={handleSubmit}>
          <h4 id="add-user">add collaborator</h4>
          <div className="search">
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
          </div>
        </form>
        <div className="searched-users">
          <ul id="user-options">
            {showUsers?.map(user =>
              <li
                className="user-option"
                onClick={() => setOpen(user)}
              >{user.username}</li>
            )}
          </ul>
        </div>
      </div>

    </UserAside>
  )
}