import Home from './Component/Home/Home';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import Checkout from './Component/Checkout/Checkout';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Order from './Component/Order/Order';

export   const UserContext=createContext();

function App() {

  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/admin'>
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path='/orders'>
          <Order></Order>
          
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/checkout/:id'>
          <Checkout></Checkout>
        </PrivateRoute>
        
      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
