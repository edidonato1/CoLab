import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/users';

export default function PostDetail(props) {
  const { post } = props
  const [user, setUser] = useState('');

  const updateCreatedAt = (str) => {
    let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
    return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
  }

  useEffect(() => {
    const fetchUser = async (id) => {
      const user = await (getOneUser(id));
      setUser(user.username)
    }
    fetchUser(post.user_id)
  }, [])


  return (
    <div>
      <h3>{post.subject}</h3>
      <h4>{ user}</h4>
      <p>{post.content}</p>
      <p>posted: {updateCreatedAt(post.created_at)}</p>
    </div>

  )
}
