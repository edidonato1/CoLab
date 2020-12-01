import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneMedium } from '../../services/media'
import { getOneUser } from '../../services/users';
import PostCreate from '../post/PostCreate';

export default function MediumDetail(props) {
  const [medium, setMedium] = useState(null);
  const [createPost, setCreatePost] = useState(false);
  const { id } = useParams();
  const { loggedInUser } = props;

  const updateCreatedAt = (str) => {
    let newStr = str.split('').splice(0, 10).join('').split('-').reverse()
    return newStr.map(item => item.charAt(0) === '0' ? item.slice(1) : item).join('/')
  }


  useEffect(() => {
    const fetchMedium = async () => {
      const mediumData = await getOneMedium(id);
      setMedium(mediumData);
    }
    fetchMedium(id);
  }, [id, createPost])


  return (
    <>{!createPost ?
      <>
        <h1>{medium?.name}</h1>
        <h2 onClick={() => setCreatePost(!createPost)}>post to {medium?.name}</h2>
        {medium?.posts.map((post) => (
          <>
            <h3>{post.subject}</h3>
            <p>{post.content}</p>
            <p>posted: {updateCreatedAt(post.created_at)}</p>
          </>
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