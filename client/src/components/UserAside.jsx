import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import UserAsideStyles from '../stylesheets/UserAside';


export default function UserAside(props) {
  const [mediumLink, setMediumLink] = useState(null);
  const history = useHistory();

  const { loggedInUser, media } = props;


  // navigate using select menu
  if (mediumLink) {
    setMediumLink(null)
    history.push(`/media/${mediumLink}`)
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