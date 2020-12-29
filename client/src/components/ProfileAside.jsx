import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import UserAsideStyles from '../stylesheets/UserAside';
import Logout from '../components/modal/Logout';


export default function ProfileAside(props) {
  const [mediumLink, setMediumLink] = useState(null);
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const { loggedInUser, handleLogout, editProfile, setEditProfile } = props;


  if (mediumLink) { // listen for selection from <select> menu to link upon selection
    setMediumLink(null);
    history.push(`/media/${mediumLink}`);
  }

  return (
    <UserAsideStyles>
      {/* render logout modal if triggered */}
      {logoutConfirm ?
        <Logout
          open={open}
          setOpen={setOpen}
          handleLogout={handleLogout}
          setLogoutConfirm={setLogoutConfirm} />
        : <></>}

      <div className="profile-title">
        <h1>{loggedInUser?.username}</h1>
        <img alt="profile pic" className="profile-pic" src={loggedInUser?.img_url ? loggedInUser.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
      </div>
      <div className="user-media">
        <h4>your media</h4>
        <ul>
          {/* easy access to user's associated media */}
          {loggedInUser?.media.map(medium =>
            <Link key={medium.id} to={`/media/${medium.id}`} ><li key={medium.id}>{medium.name}</li></Link>
          )}
        </ul>
        <h4>your collaborations</h4>
        <ul>
          {loggedInUser?.collaborations.map(colab =>
            <Link to={`/collaborations/${colab.id}`}>
              <li>{colab.title}</li>
            </Link>
          )}
        </ul>
        <div className="button-box">
          <button onClick={() => setEditProfile(!editProfile)}>edit</button>
          <button onClick={(e) => {
            e.preventDefault();
            setLogoutConfirm(true); // trigger modal
            setTimeout((() => setOpen(true)), 200);
          }}>log out</button>
        </div>
      </div>
    </UserAsideStyles>
  )
}