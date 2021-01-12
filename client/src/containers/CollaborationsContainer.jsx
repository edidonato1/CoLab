import { Route, Switch } from 'react-router-dom';
import Collaboration from '../screens/collaboration/Collaboration';
import ColabCreate from '../screens/collaboration/ColabCreate';
import { getAllUsers } from '../services/users';
// import { createCollaboration } from '../services/collaborations'; 

export default function CollaborationsContainer(props) {
  const { loggedInUser, media, users, collaborator } = props
  

  
  return (
    <Switch>
      <Route path="/collaborations/create">
        <ColabCreate
          collaborator={collaborator}
          loggedInUser={loggedInUser}
          users={users}
          media={media}
        />
      </Route>
      <Route path="/collaborations/:id">
        <Collaboration 
          users={users}
          loggedInUser={loggedInUser}
          media={media}
        />
      </Route>
    </Switch>
  )
}