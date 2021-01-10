import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createCollaboration, addUserToColab, addMediumToColab, getOneCollaboration } from '../../services/collaborations';
import FormStyles from '../../stylesheets/FormStyles';


export default function ColabCreate(props) {
  const { loggedInUser, media, users, collaborator } = props;

  const [colabId, setColabId] = useState(null)
  const [created, setCreated] = useState(false);
  // const [showUsers, setShowUsers] = useState([]);
  const [searchUser, setSearchUser] = useState('');
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
      setCreated(true)
    }
    if (colabId) {
      if (collaborator) {
          addUser();
          history.push(`/collaborations/${colabId}`)
        }
       else {
        history.push(`/collaborations/${colabId}`)
      }
    }
  }, [colabId])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  // const removeFilter = (field, idx) => { // removes item from formData, taking 'field' as argument to target key value pair
  //   formData[field].splice(idx, 1)
  //   setRefresh(!refresh);
  // }

  return (

    <FormStyles>
      <h1>new collaboration</h1>
      <div className="colab-create-main">
        <form onSubmit={(e => {
          e.preventDefault();
          colabCreate()
        })}>
          <label> title
          <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
         
            <div>
              <button type="submit">create</button>
            </div>
        </form>
      </div>
    </FormStyles >
  )
}