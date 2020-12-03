import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/users';
import PostEdit from './PostEdit';

export default function PostDetail(props) {
  const { post, loggedInUser, updated, setUpdated } = props;
  const [editPost, setEditPost] = useState(false);
  const [user, setUser] = useState({});



  const updateCreatedAt = (str) => {
    let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
    return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
  }

  useEffect(() => {
    const fetchUser = async (id) => {
      const user = await (getOneUser(id));
      setUser(user)
    }
    fetchUser(post.user_id)
  }, [editPost])


  return (
    <>
      {!editPost ?
        <div className="post">
          <div className="post-top">
            <div className="user-info">
              <img id="user-pic" src={user.img_url ? user.img_url : "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"} alt={user.username} />
              <h4>{user.username}</h4>
            </div>
            <h3>{post.subject}</h3>
            {loggedInUser?.id == post.user_id ?
            <h6 onClick={() => setEditPost(!editPost)}>Edit</h6>
            :
            // <h6 onClick={() => setEditPost(!editPost)}>Edit</h6>
            <> </>
          }
          </div>
          <div id="content">
          <p >{post.content}</p>
          <small>posted: {updateCreatedAt(post.created_at)}</small>
          </div>
        </div>
        :
        <PostEdit
          updateCreatedAt={updateCreatedAt}
          editPost={editPost}
          setEditPost={setEditPost}
          post={post}
          updated={updated}
          setUpdated={setUpdated}
          user={user}
        />
      }
    </>
  )
}
