
import Styled from './ModalStyles';
import { destroyPost } from '../../services/posts';

export default function DeleteAccountConfirm(props) {
  const { updated, setUpdated, post, setDeleteConfirm, open, setOpen } = props;


  const handleDelete = async (id) => {
    await destroyPost(id);
    setUpdated(!updated);  // pass updated status up to App.jsx
    setDeleteConfirm(false); // no longer render modal
    setOpen(false); // pass to styled div for transition on open
  }

  return (
    <Styled open={open} >
      <div className="modal-parent">
        <div className="modal">
          <form>
            <h4>erase this post?</h4>
            <div className="confirm">
              <button onClick={() => handleDelete(post.id)} className="confirm-button" id="confirm-delete">yes, erase</button>
              <button onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                setTimeout((() => setDeleteConfirm(false)), 500)
              }} className="confirm-button" id="cancel-delete">cancel</button>
            </div>
          </form>
        </div>
      </div>
    </Styled>
  )
}