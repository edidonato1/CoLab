import { useState, useEffect } from 'react';
import { getOneUser } from '../../services/users';
import { updateCreatedAt } from '../../utils/stringFunctions'
import PostEdit from './PostEdit';

export default function PostDetail(props) {
  const [mobile, setMobile] = useState(false)
  const { post, loggedInUser, updated, setUpdated } = props;
  const [editPost, setEditPost] = useState(false);
  const [readLess, setReadLess] = useState(true);

  const [user, setUser] = useState({});

  const handler = () => {
    window.innerWidth <= 600 ? setMobile(true) : setMobile(false)
  }

  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler)
  }, [])

  useEffect(() => {
    const fetchUser = async (id) => {
      const user = await (getOneUser(id));
      setUser(user)
    }
    fetchUser(post.user_id)
  }, [editPost, post.user_id])


  const showLess = mobile ? ` << read less` : ``
  const showMore = post.content.length > 140 ? `... read more >>` : ``

  return (
    <>
      {!editPost ?
        <div className="post">
          <div className="post-top">
            <div className="user-info">
              <img id="user-pic" src={user.img_url ? user.img_url : "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"} alt={user.username} />
              <h4>{user.username}</h4>
            </div>
            <h3 className="subject">{post.subject}</h3>
            {loggedInUser?.id == post.user_id ?
              <h6 onClick={() => setEditPost(!editPost)}>Edit</h6>
              :
              <> </>
            }
          </div>
          <div id="content">

            {readLess && mobile ?
              <p > {post.content.slice(0, 140)}<small id="read-more" onClick={() => setReadLess(!readLess)}>{showMore}</small> </p>
              :
              <p>{post.content}<small id="read-more" onClick={() => setReadLess(!readLess)}>{showLess}</small></p>}
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
