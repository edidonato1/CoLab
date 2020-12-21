import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../services/users';

export default function UserDetail(props) {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(id);
      setUser(userData);
    }
    fetchUser();
  },[])

  return (
    <div>
      <h1>User Detail</h1>
      <h2>{user?.username}</h2>
      <img src={ user?.img_url}/>
      <p>collaborations: {user?.collaborations.length}</p>
      {user?.media?.map(medium => 
        <p>{medium.name}</p>
        )}
    </div>
  )
}