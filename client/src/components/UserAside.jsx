import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faUser, faPalette, faHome } from '@fortawesome/free-solid-svg-icons';
import UserAsideStyles from '../stylesheets/UserAside';


export default function UserAside(props) {
  const [mediumLink, setMediumLink] = useState(null);

  const { loggedInUser, media } = props;

  if (mediumLink) {
    return <Redirect to={`/media/${mediumLink}`} />
}

  return (
    <UserAsideStyles>
      <h1>{loggedInUser?.username}</h1>
      <div className="user-media">
        <h4>your media</h4>
        <ul>
        {loggedInUser?.media.map(medium => 
          <Link to={`/media/${medium.id}`} ><li>{medium.name}</li></Link>
          )}
        </ul>

        <select
          defaultValue='default'
          name='media'
          onChange={(e) => setMediumLink(e.target.value)}
            >
            <option disabled value='default' >browse media</option>
            {media?.map(medium =>
            <option value={medium.id} key={medium.id}>{medium.name}</option>
            )}
          </select>
      

      </div>
  </UserAsideStyles>
)
}