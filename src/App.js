import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Components/Register/Register';
import VolunteerList from './Components/Admin/VolunteerList/VolunteerList'
import AddEvent from './Components/Admin/AddEvent/AddEvent';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import EventsReg from './Components/EventsReg/EventsReg';

export const UserContext = createContext() ;

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/register/:name">
          <Register></Register>
        </Route>
        <Route path="/admin">
          <VolunteerList></VolunteerList>
        </Route>
        <Route path="/adminEventList">
          <VolunteerList></VolunteerList>
        </Route>
        <Route path="/adminAddEvent">
          <AddEvent></AddEvent>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/eventsreg">
          <EventsReg></EventsReg>
        </Route>
      <Route path="/">
      <Home></Home>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
