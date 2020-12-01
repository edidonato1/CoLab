import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Media(props) {
  const { media } = props

  // const name = media[0].name

  return (
    <div>
      <h1>Media</h1>
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
  )
}