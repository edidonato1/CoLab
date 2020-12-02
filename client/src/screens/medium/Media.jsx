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
            <React.Fragment key={medium.id}>
              <Link to={`/media/${medium.id}`}>
                <h2>{medium.name}</h2>
                <img src={medium.img_url} />
              </Link>
              <>
                <p>{medium.description}</p>
              </>
            </React.Fragment>
          ))
        }
      </div>
    </MediaStyles>
  )
}