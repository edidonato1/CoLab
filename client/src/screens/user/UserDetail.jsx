import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getOneUser } from '../../services/users';
import UserStyles from '../../stylesheets/UserDetail';

export default function UserDetail(props) {
  const [user, setUser] = useState(null);

  const { loggedInUser, setCollaborator } = props

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(id);
      setUser(userData);
    }
    fetchUser();
  }, [id])

  return (
    <UserStyles >
      <div className="title-div">
        <Link to="/users"><p>{"<<"} back to user index</p> </Link>
        <h1 className="username">{user?.username}'s profile</h1>
        <img alt={user?.username} className="profile-image" src={user?.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
      </div>
      <div className="below-title">
        <h3> bio: </h3>
        <p className="profile-text">  {user?.bio}</p>
        <h3>collaborations: </h3>
        <p className="profile-text">{user?.collaborations.length}</p>
        {user?.id !== loggedInUser?.id ?
          <button
            onClick={() => {
              setCollaborator(user)
              history.push('/collaborations/create')
            }
            }
          >collaborate with {user?.username}</button>
          :
          <></>
        }
        <h3>media: </h3>
        <ul className='profile-text'>
          {user?.media?.map(medium =>
            <li key={medium.name}>{medium.name}</li>
          )}
        </ul>
      </div>
    </UserStyles>
  )
}