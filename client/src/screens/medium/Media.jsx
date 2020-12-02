import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediaStyles from '../../stylesheets/MediaStyles';

export default function Media({ media }) {
  // const { media } = props



  return (
    <MediaStyles>
      <h1>Media</h1>
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
                  <p>{medium.description}</p>
                </div>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </MediaStyles>
  )
}