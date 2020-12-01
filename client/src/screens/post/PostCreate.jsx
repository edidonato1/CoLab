import { useState } from 'react';
import { addPost } from '../../services/posts';

export default function PostCreate(props) {
  const { loggedInUser, medium, mediumId, createPost, setCreatePost } = props
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
    user_id: loggedInUser.id,
    medium_id: Number(mediumId)
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (mediumId, formData) => {
    await addPost(mediumId, formData);
    setCreatePost(!createPost);
  }

  return (

    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(mediumId, formData)
    }}>
      <h1>post to {medium?.name}</h1>
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
      <button type="submit">post</button>
    </form>
  )
}