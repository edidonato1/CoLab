import { useState, useEffect } from 'react'
import FormStyles from '../../../stylesheets/FormStyles';
import { addColabPost } from '../../../services/colabPosts';

export default function ColabPostCreate(props) {
  const { loggedInUser, createPost, setCreatePost, collaboration } = props;
  const [formData, setFormData] = useState({
    content: '',
    user_id: Number(loggedInUser?.id),
    collaboration_id: Number(collaboration?.id)
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    await addColabPost(collaboration.id, formData);
    setCreatePost(!createPost);
  }

  const goBack = `<< back`

  return (
    <FormStyles>
      <p className="go-back" onClick={() => setCreatePost(!createPost)}>{goBack}</p>
        <form className="form-main" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit()
        }}>
          <h1 >post to <span id="create-title">{collaboration?.title}</span></h1>
          <label>content
            <textarea
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </label>
          <div className="button-box">
            <button type="submit">post</button>
          </div>
        </form>
    </FormStyles>
  )
}