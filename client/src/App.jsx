import Home from './screens/Home';
import Layout from './components/Layout';
import Login from './screens/user/Login';
import Register from './screens/user/Register';
import MediumContainer from './containers/MediumContainer';
import UsersContainer from './containers/UsersContainer';
import CollaborationsContainer from './containers/CollaborationsContainer.jsx';
import Profile from './screens/user/Profile';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { getAllUsers } from './services/users';
import { getAllMedia } from './services/media';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
import './App.css';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [collaborator, setCollaborator] = useState(null);;
  const [media, setMedia] = useState([]);
  const [users, setUsers] = useState([]);
  const [updated, setUpdated] = useState(false);

  const history = useHistory();


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setLoggedInUser(userData)
    }
    handleVerify();
  }, [updated])

  useEffect(() => {
    const fetchMedia = async () => {
      const mediaData = await getAllMedia();
      setMedia(mediaData.sort((a, b) => {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }));
    }
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchMedia();
    fetchUsers();
  }, [])

  const handleLogin = async (loginData) => {
    try {
      const userData = await loginUser(loginData);
      setLoggedInUser(userData);
      history.push('/');
    } catch (e){
        alert("username or password incorrect")
    }
  }

  const handleRegister = async (registerData) => {
    try {
      const userData = await registerUser(registerData);
      setLoggedInUser(userData)
      history.push('/');
    } catch (e) {
      alert("please fill in all the fields")
    }
  }

  const handleLogout = async () => {
    setLoggedInUser(null);
    localStorage.removeItem('authToken')
    removeToken();
    history.push('/')
  }

  return (
    <Layout
      loggedInUser={loggedInUser}
      handleLogout={handleLogout}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' >
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/profile'>
          <Profile
            updated={updated}
            setUpdated={setUpdated}
            media={media}
            loggedInUser={loggedInUser}
            handleLogout={handleLogout} />
        </Route>
        <Route path='/media' >
          <MediumContainer
            media={media}
            loggedInUser={loggedInUser} />
        </Route>
        <Route path='/users'>
          <UsersContainer
            collaborator={collaborator}
            setCollaborator={setCollaborator}
            users={users}
            setUsers={setUsers}
            media={media}
            loggedInUser={loggedInUser} />
        </Route>
        <Route path="/collaborations">
          <CollaborationsContainer
            collaborator={collaborator}
            users={users}
            loggedInUser={loggedInUser}
            media={media} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
