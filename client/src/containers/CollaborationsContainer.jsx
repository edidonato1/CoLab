import { Route, Switch, useHistory } from 'react-router-dom';
import Collaboration from '../screens/collaboration/Collaboration';
import ColabCreate from '../screens/collaboration/ColabCreate';
// import { createCollaboration } from '../services/collaborations'; 

export default function CollaborationsContainer(props) {
  const { loggedInUser, media, users} = props


  
  return (
    <Switch>
      <Route path="/collaborations/create">
        <ColabCreate
          // colabCreate={colabCreate}
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