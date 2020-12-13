import { useState } from 'react';
import { putPost } from '../../../services/posts';
import DeletePost from '../../../components/modal/DeletePost';


export default function PostCreate(props) {
  const { post, updated, setUpdated,  editPost, setEditPost, user } = props
  const [formData, setFormData] = useState({
    subject: post.subject,
    content: post.content,
    user_id: post.user_id,
    medium_id: post.medium_id
  })
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [open, setOpen] = useState(false);
 

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
      <div className="post">
        {deleteConfirm ?
          <DeletePost
            open={open}
            setOpen={setOpen}
            updated={updated} 
            setUpdated={setUpdated}
            post={post}
            setDeleteConfirm={setDeleteConfirm}
          />
          : <></>
      }
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(post.id, formData)
        }}>
          <div className="post-top">
            <div className="user-info">
              <img id="user-pic" src={user.img_url ? user.img_url : "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"} alt={user.username} />
              <h4>{user.username}</h4>
            </div>
            <input
              className="edit-input"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              id="subject"
            />
            <h6 onClick={() => setEditPost(!editPost)}>Cancel</h6>
          </div>
          <div id="content">
            <textarea
              id="edit-textarea"
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>
          <div className="button-box">
            <button id="delete" onClick={(e) => {
              e.preventDefault()
              setDeleteConfirm(true)
              setTimeout((()=> setOpen(true)), 500)
            }}>erase</button>
            <button type="submit">save</button>
          </div>
        </form>
      </div>
    </>
  )
}