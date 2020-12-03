import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaStyles from '../../stylesheets/MediaStyles';
import UserAside from '../../components/UserAside';

export default function Media(props) {
  const { media, loggedInUser } = props

  
  return (
    <MediaStyles>
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