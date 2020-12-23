import { useState, useEffect } from 'react';
import ColabPost from '../../components/ColabPost';
import { Link, useParams, Redirect } from 'react-router-dom';
import { getOneCollaboration } from '../../services/collaborations';

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
    <div>
      <h1>Collaboration</h1>
      <h3>{collaboration?.title}</h3>
      {collaboration?.media?.map(medium =>
        <img
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
          src={medium.img_url} />
      )}
      <h3>posts</h3>
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
  )
}