import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOneMedium } from '../../services/media'
import MediumStyles from '../../stylesheets/MediumStyles';
import PostCreate from '../post/PostCreate';
import PostDetail from '../post/PostDetail';
import UserAside from '../../components/UserAside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function MediumDetail(props) {
  const [medium, setMedium] = useState(null);
  const [createPost, setCreatePost] = useState(false);
  const [updated, setUpdated] = useState(false)
  const { id } = useParams();
  const { loggedInUser, media } = props;



  useEffect(() => {
    const fetchMedium = async () => {
      const mediumData = await getOneMedium(id);
      setMedium(mediumData);
    }
    fetchMedium(id);
  }, [id, createPost, updated])


  return (

    <MediumStyles>
      <div className="user-aside">
        <UserAside
          media={media}
          loggedInUser={loggedInUser} />
      </div>
      {!createPost ?
        <div className="medium-parent">

          <div
            className="medium-title">
            <img src={medium?.img_url} alt={medium?.name} />
            <div className="title-right">
              <h1 className="name">{medium?.name}</h1>
              <h4>{medium?.posts.length} posts</h4>
            </div>
          </div>

          <p
            className="create-post"
            onClick={() => setCreatePost(!createPost)}>new post <FontAwesomeIcon className="icon" icon={faPencilAlt} />
          </p>
          <div className="post-container">

            {medium?.posts.length > 0 ?
              medium?.posts.map((post) => (
              <PostDetail
                updated={updated}
                setUpdated={setUpdated}
                loggedInUser={loggedInUser}
                key={post.id}
                post={post} />
              )).reverse()
              :
              <h3 className="no-posts">no posts for { medium?.name} yet.</h3>
          }
          </div>
        </div>
        :
        <PostCreate
          loggedInUser={loggedInUser}
          createPost={createPost}
          setCreatePost={setCreatePost}
          medium={medium}
          mediumId={id} />
      }
    </MediumStyles>

  )
}