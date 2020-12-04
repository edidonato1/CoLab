
import Styled from './ModalStyles';
import { destroyPost }  from '../../services/posts';

export default function DeleteAccountConfirm(props) {
  const {updated, setUpdated, post, setDeleteConfirm } = props

  const handleDelete = async (id) => {
    await destroyPost(id)
    setUpdated(!updated)
    setDeleteConfirm(false)
  }

  return (
    <Styled >
      <div className="modal-parent">
      <div className="modal">
        <form>
          <h4>Are you sure you want to delete your post?</h4>
          <div className="confirm">
            <button onClick={() => handleDelete(post.id)} className="confirm-button" id="confirm-delete">Yes, I'm sure</button>
            <button onClick={() => setDeleteConfirm(false)} className="confirm-button" id="cancel-delete">Cancel</button>
          </div>
        </form>
      </div>
      </div>
    </Styled>
  )
}