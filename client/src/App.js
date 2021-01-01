import React, { Fragment } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
