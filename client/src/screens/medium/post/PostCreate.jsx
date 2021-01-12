import { useState } from 'react';
import { addPost } from '../../../services/posts';
import FormStyles from '../../../stylesheets/FormStyles';

export default function PostCreate(props) {
  const { loggedInUser, medium, mediumId, createPost, setCreatePost } = props
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
    user_id: Number(loggedInUser?.id), // add logged in user's id as FRK to post
    medium_id: Number(mediumId) //  add current medium id as FRK to post
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
    <div className="medium-parent">
      <FormStyles>
      <p className="go-back" onClick={() => setCreatePost(!createPost)}>{"<<"} go back</p>
        <form className="form-main" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(mediumId, formData)
        }}>
          <h1 >post to <span id="create-title">{medium?.name}</span></h1>
          <label>subject
              <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              maxLength="30"
            />
          </label>
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
    </div>
  )
}