import Home from './screens/Home';
import Login from './screens/user/Login';
import Register from './screens/user/Register';
import { useEffect, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { verifyUser, loginUser, registerUser } from './services/auth';
import './App.css';
import { LoggedInUserProvider, LoggedInUserContext } from './components/shared/LoggedInUser';



function App() {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
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
    setLoggedInUser(userData);
    history.push('/');
  }

  return (
    <LoggedInUserProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' >
          <Login handleLogin={handleLogin}/>
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
      </Switch>
    </LoggedInUserProvider>
  );
}

export default App;
