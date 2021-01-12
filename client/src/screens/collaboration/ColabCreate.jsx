import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createCollaboration, addUserToColab } from '../../services/collaborations';
import FormStyles from '../../stylesheets/FormStyles';


export default function ColabCreate(props) {
  const { collaborator } = props;

  const [colabId, setColabId] = useState(null)
  const [created, setCreated] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    status: 1,
  });

  const history = useHistory();

  const colabCreate = async () => {
    const resp = await createCollaboration(formData);
    setColabId(resp.id)
  };

  useEffect(() => {
    const addUser = async () => {
      await addUserToColab(collaborator.id, colabId)
      setCreated(!created)
    }
    if (colabId) {
      if (collaborator) {
        addUser(); // initialize users array with selected user (collaborator)
        history.push(`/collaborations/${colabId}`) // redirect to newly created collaboration
      }
      else {
        history.push(`/collaborations/${colabId}`)
      }
    }
    return function cleanup() {
      setCreated(!created)
    }
  }, [colabId, collaborator])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (

    <FormStyles>
      <div onClick={() => history.goBack()}>
        <p className="go-back">{"<<"} back to {collaborator?.username}'s profile</p>
      </div>
      <br />
      <h1>new collaboration with <span >{collaborator?.username}</span></h1>
      <div >
        <form
          className="colab-create-main"
          onSubmit={(e => {
            e.preventDefault();
            colabCreate()
          })}>
          <input
            id="colab-create-title"
            type="text"
            name="title"
            value={formData.title}
            placeholder="name your collaboration"
            onChange={handleChange}
            maxLength="25"
            autoFocus
            required
          />
          <div>
            <button type="submit">create</button>
          </div>
        </form>
      </div>
    </FormStyles >
  )
}