import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MediaStyles from '../../stylesheets/MediaStyles';
import UserAside from '../../components/aside/UserAside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default function Media(props) {
  const [mediumLink, setMediumLink] = useState('');
  const history = useHistory();

  if (mediumLink) {
    setMediumLink(null)
    history.push(`/media/${mediumLink}`)  // navigate using value of <select> menu
  }

  const { media, loggedInUser } = props


  return (
    <MediaStyles>
      <p id="add-request">don't see your preferred medium?<br />
        request to add one here <Link to="/media/request" ><FontAwesomeIcon className="icon" icon={faPlusCircle} /></Link>
      </p>

      <h1>all media</h1> 
      
      {/* user aside with <select> menu not rendered on mobile. This menu replaces it. */}
      <div className="mobile-select">   
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
      <div className="all-media">
        <div className="user-aside">
          <UserAside // user aside component renders user-specific data for easy navigation
            media={media}
            loggedInUser={loggedInUser} />
        </div>
        <div className="media-container">
          {
            media.map((medium) => (
              <React.Fragment key={medium.id} >
                <div className="media-card">
                  <div id="image-container">
                    <img alt={medium.name} src={medium.img_url} />
                  </div>
                  <div className="media-card-right">
                    <Link to={`/media/${medium.id}`}>
                      <h2 className="medium-title">{medium.name}</h2>
                    </Link>
                    <div className="description">
                      <p id="description">{medium.description}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </MediaStyles>
  )
}