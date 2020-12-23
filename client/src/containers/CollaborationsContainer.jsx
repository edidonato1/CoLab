import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Collaboration from '../screens/collaboration/Collaboration';
import getAllCollaborations from '../services/collaborations';


export default function CollaborationsContainer(props) {

  const { loggedInUser, media } = props

  
  return (
    <Switch>
      <Route path="/collaborations/:id">
        <Collaboration 
          loggedInUser={loggedInUser}
          media={media}
        />
      </Route>
    </Switch>
  )
}