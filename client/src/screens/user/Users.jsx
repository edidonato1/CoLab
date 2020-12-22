import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../../stylesheets/UserList';

export default function Users(props) {
  const { users, media } = props;

  const [showUsers, setShowUsers] = useState(users)
  const [mediaFilter, setMediaFilter] = useState([])

  useEffect(() => {
    setShowUsers(users.filter(user =>
      user.media.some(medium =>
        mediaFilter.includes(medium.name)
        )
      ))
  },[users,  mediaFilter])


  // to collaborate, logged in user clicks a button on user's profile that takes you to a 
  // create collaboration page.  on that page, the user can choose the media, and from a 
  // select menu they can add more users.  The users's id, who they clicked to start the
  // collaboration will be stored in state and will be set to the initial state in the form of users 
  // to add to the collaboration

  return (
    <UserList>
      <h1>users</h1>
      <form>
        <select onChange={(e) => setMediaFilter([...mediaFilter, e.target.value]) }>
          {media.map(medium => 
            <option value={medium.name}>{ medium.name}</option>
            )}
        </select>
      </form>
      {showUsers?.map(user =>
        <div className="user-thumbnail">
          <Link  className="user-link" key={user.id} to={`/users/${user.id}`}>
            <img  className="user-thumbnail-img" src={ user.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`}/>
            <p className="thumbnail-username">{user.username}</p>
          </Link>
        </div>
      )}
    </UserList>
  )
}