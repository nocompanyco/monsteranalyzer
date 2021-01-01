import React, { Fragment } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';
import LanPage from './pages/lanPage/lanPage.component';
import infoPage from './pages/infoPage/infoPage.component';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/lan" exact component={LanPage} />
          <Route path="/info" exact component={infoPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
