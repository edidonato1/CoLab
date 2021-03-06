import { Route, Switch } from 'react-router-dom';
import Users from '../screens/user/Users';
import UserDetail from '../screens/user/UserDetail';

export default function UsersContainer(props) {
  const { media, loggedInUser, users, setCollaborator } = props;


  return (
    <Switch>
      <Route exact path="/users">
        <Users
          loggedInUser={loggedInUser}
          media={media}
          users={users}
        />
      </Route>
      <Route path="/users/:id">
        <UserDetail
          setCollaborator={setCollaborator}
          loggedInUser={loggedInUser}
        />
      </Route>
    </Switch>
  )
}