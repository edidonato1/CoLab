import { useState, useEffect } from 'react';
import ColabPost from '../../components/ColabPost';
import ColabStyles from '../../stylesheets/Collaboration';
import ColabAside from '../../components/ColabAside';
import { Link, useParams, Redirect } from 'react-router-dom';
import { getOneCollaboration, addUserToColab } from '../../services/collaborations';

export default function Collaboration(props) {
  const [collaboration, setCollaboration] = useState(null);

  const { id } = useParams();

  const { loggedInUser, media } = props;

  useEffect(() => {
    const fetchCollaboration = async () => {
      const collabData = await getOneCollaboration(id);
      setCollaboration(collabData);
    }
    fetchCollaboration()
  }, [id])


  return (
    <ColabStyles>
      <ColabAside
        collaboration={collaboration}
      />
      <div className="main-div">
        <div className="header-container">
          <img className="media-images" src={collaboration?.media[0].img_url} />
          <div className="title-user-pics">
            <h1>{collaboration?.title}</h1>
            <div className="collaborator-pics">
              {collaboration?.users.map(user =>
                <img className="collaborator-image-small" src={user.img_url ? user.img_url : `https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} />
              )}
            </div>
          </div>
          <img className="media-images" src={collaboration?.media[1].img_url} />
        </div>
        <h3>{collaboration?.colab_posts.length} posts</h3>
        <div className="colab-posts-container">
          {collaboration && collaboration.colab_posts.map(post =>
            <ColabPost
              userId={post.user_id}
              content={post.content}
              createdAt={post.created_at}
            />
          )}
        </div>
      </div>
    </ColabStyles>
  )
}