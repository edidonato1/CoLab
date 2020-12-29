import { useState, useEffect } from 'react';
import { getOneUser } from '../../../services/users';
import { updateCreatedAt } from '../../../utils/stringFunctions';

export default function ColabPost(props) {
  const [user, setUser] = useState({})

  const { userId, content, createdAt } = props;

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(userId)
      setUser(userData);
    }
    fetchUser();
  }, [])

  return (
    <div className="colab-post">
      <div className="post-top">
        <img
          alt="user image"
          className="post-user-image"
          src={user.img_url} />
        <h3 className="username">{user.username}</h3>
      </div>
      <div className="content">
        <div className="content-child">
          <p >{content}</p>
          <small>posted {updateCreatedAt(createdAt)}</small>
        </div>
      </div>
    </div>
  )
}