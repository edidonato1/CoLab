import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserAsideStyles from '../../stylesheets/UserAside';


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
      <h1><Link to={loggedInUser ? "/profile" : "/login"} >{loggedInUser ? loggedInUser?.username : `nobody logged in`}</Link></h1>
      <div className="user-media">
        <h4>your media</h4>
        <ul>
          {loggedInUser?.media.map(medium =>
            <Link key={medium.id} to={`/media/${medium.id}`} ><li key={medium.id}>{medium.name}</li></Link>
          )}
        </ul>
        {/* link the drop-down selection to the coinciding medium messageboard */}
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