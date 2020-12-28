import { useState, useEffect } from 'react';
import { getAllUsers } from '../services/users';
import UserAside from '../stylesheets/UserAside';
import UserInfo from '../components/modal/UserInfo';


export default function ColabAside(props) {
  const [users, setUsers] = useState()
  const [searchUser, setSearchUser] = useState('');
  const [showUsers, setShowUsers] = useState([]);
  const [open, setOpen] = useState(null);

  const { collaboration } = props

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    searchUser !== '' 
    ?
    setShowUsers(users?.filter(user =>
      user.username.toLowerCase().includes(searchUser.toLowerCase())))
    : 
    setShowUsers([])
  },[searchUser])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <UserAside>
      {open ? 
        <UserInfo
          collaboration={collaboration}
          open={open}
          setOpen={setOpen}
        />
        :
        <></>
    }
      <div className="user-media">
        <h4>heyyy</h4>
        <form onSubmit={handleSubmit}>
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
        </form>
        <div className="searched-users">
          {showUsers?.map(user => 
            <p
              className="user-option"
              onClick={() => setOpen(user)}
            >{user.username}</p>

            )}
        </div>
      </div>

    </UserAside>
  )
}