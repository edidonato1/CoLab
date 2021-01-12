import { Switch, Route} from 'react-router-dom';
import Media from '../screens/medium/Media';
import MediaDetail from '../screens/medium/MediumDetail';
import MediumRequest from '../screens/medium/MediumRequest';

export default function MediumContainer(props) {
  const { media, loggedInUser } = props;

  return (
    <Switch>
      <Route exact path='/media/'>
        <Media
          loggedInUser={loggedInUser}
          media={media} />
      </Route>
      <Route path='/media/request'>
        <MediumRequest />
      </Route>
      <Route path='/media/:id' >
        <MediaDetail
          loggedInUser={props.loggedInUser}
          media={media} />
      </Route>
    </Switch>
  )
}