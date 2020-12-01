import { useState } from 'react';
import { putPost } from '../../services/posts';

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
    <div>
      <p onClick={() => setEditPost(!editPost)}>cancel</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(post.id, formData)
      }}>
        <h1>edit post to {medium?.name}</h1>
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
  )
}