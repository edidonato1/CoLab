import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addUserToColab } from '../../services/collaborations';
import Styled from './ModalStyles';

export default function UserInfo(props) {
  const history = useHistory();

  const { open, setOpen, collaboration } = props;
  const currentUser = open;
  // "open" is used as a boolean variable for the ModalStyles stylesheet
  // Giving it value toggles display of modal -- in this case we are piggybacking
  // the user's info into that variable.  

  const collaborate = async () => {
    await (addUserToColab(currentUser.id, collaboration.id));
  }

  return (
    <Styled open={open} >
      <div className="modal-parent">
        <div className="modal">
          <div className="modal-user">
            <img className="collaborator-image-small" src={currentUser.img_url} />
            <h4
              onClick={() => history.push(`/users/${currentUser.id}`)}
              id="modal-username">{currentUser.username}</h4>
          </div>
          <form>
            <div className="confirm">
              <button onClick={() => collaborate()}
                className="confirm-button"
                id="collaborate-confirm">collaborate</button>
              <button onClick={(e) => {
                e.preventDefault();
                setOpen(null)
              }} className="confirm-button" id="cancel-delete">back</button>
            </div>
          </form>
        </div>
      </div>
    </Styled>
  )
}