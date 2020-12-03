import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaStyles from '../../stylesheets/MediaStyles';
import UserAside from '../../components/UserAside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default function Media(props) {
  const { media, loggedInUser } = props


  return (
    <MediaStyles>
      <p id="add-request">don't see your preferred medium?<br />
        request to add one here <Link to="/media/request" ><FontAwesomeIcon className="icon" icon={faPlusCircle}/></Link>
      </p>
      
      <h1>all media</h1>
      <div className="all-media">
        <div className="user-aside">
          <UserAside
            media={media}
            loggedInUser={loggedInUser} />
        </div>
        <div className="media-container">
          {
            media.map((medium) => (
              <React.Fragment key={medium.id} >
                <div className="media-card">
                  <div id="image-container">
                    <img src={medium.img_url} />
                  </div>
                  <div className="media-card-right">
                    <Link to={`/media/${medium.id}`}>
                      <h2>{medium.name}</h2>
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