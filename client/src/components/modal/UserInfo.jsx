import { useHistory } from 'react-router-dom';
import { addUserToColab } from '../../services/collaborations';
import Styled from './ModalStyles';

export default function UserInfo(props) {
  const history = useHistory();

  const { open, setOpen, collaboration, setColabConfirm, collaborator } = props;

  const collaborate = async () => {
    if (collaboration.users.filter(user => user.id === collaborator.id).length === 0) {
      await (addUserToColab(collaborator.id, collaboration.id));
    }
  }

  return (
    <Styled open={open} >
      <div className="modal-parent">
        <div className="modal">
          <div className="modal-user">
            <img alt="collaborator" className="collaborator-image-small" src={collaborator.img_url} />
            <h4
              onClick={() => history.push(`/users/${collaborator.id}`)}
              id="modal-username">{collaborator.username}</h4>
          </div>
          <form>
            <div className="confirm">
              <button onClick={() => 
                collaborate()
              }
                className="confirm-button"
                id="collaborate-confirm">collaborate</button>
              <button onClick={(e) => {
                e.preventDefault();
                setOpen(false); // toggle "open" for modal animation
                setTimeout((() => setColabConfirm(false)), 500) // close modal
              }} className="confirm-button" id="cancel-delete">back</button>
            </div>
          </form>
        </div>
      </div>
    </Styled>
  )
}