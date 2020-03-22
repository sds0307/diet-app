import React from 'react';
import Container from '@material-ui/core/Container';
import SignIn from './components/sign-in/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <Container maxWidth="sm">
              <SignIn/>
            </Container>
          </Route>
          <Route path="/demo">
            <div>Demo</div>
          </Route>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
