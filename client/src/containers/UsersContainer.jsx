import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import Users from '../screens/user/Users';
import UserDetail from '../screens/user/UserDetail';
import { getAllUsers } from '../services/users';

export default function UsersContainer(props) {
  const { media } = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchUsers();
  },[])
  
  
  return (
    <Switch>
      <Route exact path="/users">
        <Users
          media={media}
          users={users}
        />
      </Route>
      <Route path="/users/:id">
        <UserDetail />
      </Route>

    </Switch>
  )
}