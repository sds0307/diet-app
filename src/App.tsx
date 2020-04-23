import React from 'react';
import Container from '@material-ui/core/Container';
import SignIn from './components/sign-in/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import DisplayFoodItems from './components/display-food-items/DisplayFoodItems';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <Container maxWidth="sm">
              <SignIn/>
            </Container>
          </Route>
          <Route path="/demo">
              <Dashboard/>
          </Route>
          <Route path="/">
            <DisplayFoodItems/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
