import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneMedium } from '../../services/media'
import PostCreate from '../post/PostCreate';
import PostDetail from '../post/PostDetail'

export default function MediumDetail(props) {
  const [medium, setMedium] = useState(null);
  const [createPost, setCreatePost] = useState(false);
  const [updated, setUpdated] = useState(false)
  const { id } = useParams();
  const { loggedInUser } = props;



  useEffect(() => {
    const fetchMedium = async () => {
      const mediumData = await getOneMedium(id);
      setMedium(mediumData);
    }
    fetchMedium(id);
  }, [id, createPost, updated])


  return (
    <>{!createPost ?
      <>
        <h1>{medium?.name}</h1>
        <h2 onClick={() => setCreatePost(!createPost)}>post to {medium?.name}</h2>
        {medium?.posts.map((post) => (
          <PostDetail
            updated={updated}
            setUpdated={setUpdated}
            loggedInUser={loggedInUser}
            key={post.id}
            post={post} />
        ))}
      </>
      :
      <PostCreate
        loggedInUser={loggedInUser}
        createPost={createPost}
        setCreatePost={setCreatePost}
        medium={medium}
        mediumId={id} />
    }
    </>
  )
}