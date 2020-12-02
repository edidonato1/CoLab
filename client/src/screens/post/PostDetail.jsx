import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/users';
import PostEdit from './PostEdit';

export default function PostDetail(props) {
  const { post, loggedInUser, updated, setUpdated } = props;
  const [editPost, setEditPost] = useState(false);
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
  }, [editPost])


  return (
    <>
      {!editPost ?
        <div>
          {loggedInUser?.id == post.user_id ?
            <p onClick={() => setEditPost(!editPost)}>Edit</p>
            :
            <> </>
          }
          <h3>{post.subject}</h3>
          <h4>{user}</h4>
          <p>{post.content}</p>
          <p>posted: {updateCreatedAt(post.created_at)}</p>
        </div>
        :
        <PostEdit
          editPost={editPost}
          setEditPost={setEditPost}
          post={post}
          updated={updated}
          setUpdated={setUpdated}
        />
      }
    </>
  )
}
