import Home from './screens/Home';
import Layout from './components/Layout';
import Login from './screens/user/Login';
import Register from './screens/user/Register';
import MediumContainer from './containers/MediumContainer'
import Profile from './screens/user/Profile';
import { useEffect, useState, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
import './App.css';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const history = useHistory();


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setLoggedInUser(userData)
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setLoggedInUser(userData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setLoggedInUser(userData)
    history.push('/');
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
          <Profile loggedInUser={loggedInUser}/>
        </Route>
        <Route path='/media' >
          <MediumContainer loggedInUser={loggedInUser} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
