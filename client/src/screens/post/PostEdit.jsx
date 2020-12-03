import { useState } from 'react';
import { putPost, destroyPost } from '../../services/posts';
// import FormStyles from '../../stylesheets/FormStyles';

export default function PostCreate(props) {
  const { post, updated, setUpdated , medium, editPost, setEditPost } = props
  const [formData, setFormData] = useState({
    subject: post.subject,
    content: post.content,
    user_id: post.user_id,
    medium_id: post.medium_id
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (id, formData) => {
    await putPost(id, formData);
    setEditPost(!editPost);
    setUpdated(!updated);
  }

  return (
    <>
    {/* <div className="post">
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
  </div> */}

    <div>
      <p onClick={() => setEditPost(!editPost)}>cancel</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(post.id, formData)
      }}>
        
        <label>subject
       <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <label>content
       <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <button type="submit">save</button>
      </form>
      </div>
      </>
  )
}