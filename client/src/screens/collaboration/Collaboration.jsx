import { useState, useEffect } from 'react';
import ColabPost from './ColabPost/ColabPost';
import ColabPostCreate from './ColabPost/ColabPostCreate';
import ColabStyles from '../../stylesheets/Collaboration';
import ColabAside from '../../components/ColabAside';
import { Link, useParams, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { getOneCollaboration } from '../../services/collaborations';

export default function Collaboration(props) {
  const [collaboration, setCollaboration] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  const { id } = useParams();

  const { loggedInUser, media, users } = props;

  useEffect(() => {
    const fetchCollaboration = async () => {
      const collabData = await getOneCollaboration(id);
      setCollaboration(collabData);
    }

    fetchCollaboration()
  }, [id, createPost, refresh])


  return (
    <ColabStyles>
      <ColabAside
        media={media}
        users={users}
        collaboration={collaboration}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      {!createPost ?
        <div className="main-div">

          <div className="header-container">
            <img className="media-images" src={collaboration?.media[0]?.img_url} />
            <div className="title-user-pics">
              <h1>{collaboration?.title}</h1>
              <div className="collaborator-pics">
                {collaboration?.users.map(user =>
                  <img
                    alt="user image"
                    className="collaborator-image-small"
                    src={user.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
                )}
              </div>
            </div>
            <img className="media-images" src={collaboration?.media[1]?.img_url} />
          </div>
          <div className="create-post-container">
            <h3>{collaboration?.colab_posts.length} posts</h3>
            {loggedInUser ?
              <p
                className="create-post">new post
              <FontAwesomeIcon
                  className="icon"
                  onClick={() => setCreatePost(!createPost)}
                  icon={faPencilAlt} />
              </p>
              : <p></p> // p tag used to fill spacing void for styling purposes
            }
          </div>
          <div className="colab-posts-container">
            {collaboration && collaboration.colab_posts.map(post =>
              <ColabPost
                userId={post.user_id}
                content={post.content}
                createdAt={post.created_at}
              />
            ).reverse()}
          </div>
        </div>
        :
        <div className="main-div">
          <ColabPostCreate
            collaboration={collaboration}
            createPost={createPost}
            setCreatePost={setCreatePost}
          />
        </div>
      }
    </ColabStyles>
  )
}