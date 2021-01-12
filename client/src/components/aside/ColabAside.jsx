import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addMediumToColab, removeMediumFromColab } from '../../services/collaborations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserAside from '../../stylesheets/UserAside';
import UserInfo from '../modal/UserInfo';


export default function ColabAside(props) {
  const [newMedium, setNewMedium] = useState(null)
  const [searchUser, setSearchUser] = useState('');
  const [showUsers, setShowUsers] = useState([]);
  const [collaborator, setCollaborator] = useState({})
  const [open, setOpen] = useState(false);
  const [colabConfirm, setColabConfirm] = useState(false);

  const { collaboration, users, media, refresh, setRefresh, primaryUser } = props

  useEffect(() => {
    searchUser !== ''
      ?
      setShowUsers(users?.filter(user =>
        user.username.toLowerCase().includes(searchUser.toLowerCase())))
      :
      setShowUsers([])

    if (newMedium) {
      handleAddMedium()
      setNewMedium(null)
    }

  }, [searchUser, newMedium, collaboration])

  const handleAddMedium = async () => {
    const added = await addMediumToColab(newMedium, collaboration.id)
    if (added) {
      setRefresh(!refresh);
    }
  }

  const handleRemoveMedium = async (medium) => {
    const deleted = await removeMediumFromColab(medium, collaboration.id)
    if (deleted) {
      setRefresh(!refresh);
    }
  }


  return (
    <UserAside>
      {colabConfirm ?
        <UserInfo
          collaborator={collaborator}
          setColabConfirm={setColabConfirm}
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
          <Link
            to={`/users/${primaryUser?.id}`}
            key={primaryUser?.id} >
            <li id="collaborator">{primaryUser?.username}</li>
          </Link>
          {collaboration?.users.map(user =>
            <Link
              to={`/users/${user.id}`}
              key={user.id} >
              <li id="collaborator">{user.username}</li>
            </Link>
          )}
        </ul>
        <h4>media</h4>
        <ul>
          {collaboration?.media.map(medium =>
            <Link
              to={`/media/${medium.id}`}
              className="list-span"
              key={medium.name}>
              <li >{medium.name}</li>
              <small onClick={(e) => {
                e.preventDefault();
                handleRemoveMedium(medium.id);
              }}>[ x ]</small>
            </Link>
          )}
        </ul>
        {/* form to add/remove users or media */}
        <form >
          <h4>add media</h4>
          <select
            defaultValue="default"
            onChange={(e) => {
              setNewMedium(e.target.value)
            }}>
            <option disabled value="default">select media to add</option>
            {media.map(medium =>
              <option
                value={medium.id}
                key={medium.name}>{medium.name}</option>
            )}
          </select>
          <h4 id="add-user">add collaborator</h4>
          <div className="search">
            <FontAwesomeIcon
              id="search-icon"
              icon={faSearch} />
            <input
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
                key={user.id}
                className="user-option"
                onClick={(e) => {
                  e.preventDefault();
                  setColabConfirm(true);
                  setCollaborator(user);
                  setTimeout((() => setOpen(true)), 200);
                }
                }
              >{user.username}</li>
            )}
            {searchUser.length && !showUsers.length ?
              <li>no users match</li>
              :
              <></>
            }
          </ul>
        </div>
      </div>

    </UserAside>
  )
}