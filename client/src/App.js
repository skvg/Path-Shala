import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import DashBoard from './pages/DashBoard';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path = "/">
            <HomePage className="HomePage"/>
          </Route>

          <Route exact path = "/login">
            <Login/>
          </Route>

          <Route exact path = "/signup">
            <Signup/>
          </Route>

          <Route exact path ="/dashboard">
            <DashBoard />
          </Route>

          <Route exact path = "/teachers">
            <Teachers/>
          </Route>

          <Route exact path = "/courses">
            <Courses/>
          </Route>

          <Route path = "/">
            <Redirect to = '/dashboard' />
          </Route>

        </Switch>
      </Router>
      <div className = "copyright">
        <h2>&copy; Copyright 2021 Surendra</h2>
      </div>
    </div>
  );
}

export default App;
