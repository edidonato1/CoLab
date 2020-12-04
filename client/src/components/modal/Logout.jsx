
import Styled from './ModalStyles';

export default function Logout(props) {
  const {handleLogout, setLogoutConfirm, open, setOpen } = props



  return (
    <Styled open={open}>
      <div className="modal-parent">
      <div className="modal">
        <div>
          <h4> log out?</h4>
          <div className="confirm">
              <button onClick={() => handleLogout()
              } className="confirm-button" id="confirm-delete">yes, log out</button>
              <button onClick={(e) => {
                e.preventDefault();
                setOpen(false)
                setTimeout((() => setLogoutConfirm(false)), 500)
              }} className="confirm-button" id="cancel-delete">cancel</button>
          </div>
        </div>
      </div>
      </div>
    </Styled>
  )
}