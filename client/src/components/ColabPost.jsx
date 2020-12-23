import { useState, useEffect } from 'react';
import { getOneUser } from '../services/users';
import { updateCreatedAt } from '../utils/stringFunctions';

export default function ColabPost(props) {
  const [user, setUser ] = useState({})

  const { userId, content, createdAt } = props;

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(userId)
      setUser(userData);
    }
    fetchUser();
  },[])
  
  return (
    <div>
      <h3>{user.username}</h3>
      <img src={user.img_url} />
      <p>{content}</p>
      <small>posted { updateCreatedAt(createdAt)}</small>
    </div>
  )
}