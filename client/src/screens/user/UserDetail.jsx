import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneUser } from '../../services/users';
import UserStyles from '../../stylesheets/UserDetail';

export default function UserDetail(props) {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(id);
      setUser(userData);
    }
    fetchUser();
  }, [])

  return (
    <UserStyles>
      <div className="title-div">
      <Link to="/users">back to users</Link>
      <h1 className="username">{user?.username}'s profile</h1>
      <img className="profile-image" src={user?.img_url} />
      </div>
      <div className="below-title">
          <h3> bio: </h3>
          <p className="profile-text">  {user?.bio}</p>
        <h3>collaborations: </h3>
        <p className="profile-text">{user?.collaborations.length}</p>
        <h3>media: </h3>
        <ul className='profile-text'>
          {user?.media?.map(medium =>
            <li >{medium.name}</li>
          )}
        </ul>
      </div>
    </UserStyles>
  )
}