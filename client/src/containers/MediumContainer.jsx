import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllMedia } from '../services/media';
import { getAllPosts } from '../services/posts';
import Media from '../screens/medium/Media';
import MediaDetail from '../screens/medium/MediumDetail';

export default function MediumContainer(props) {
  const [media, setMedia] = useState([]);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchMedia = async () => {
      const mediaData = await getAllMedia();
      setMedia(mediaData);
    }
    const fetchPosts = async () => {
      const postData = await getAllPosts();
      setPosts(postData);
    }
    fetchMedia();
    fetchPosts();
  }, [])


  return (
    <Switch>
      <Route path='/media/all'>
        <Media media={media} />
      </Route>
      <Route path='/media/:id' >
        <MediaDetail
          loggedInUser={props.loggedInUser}
          media={media} />
      </Route>
    </Switch>
  )
}