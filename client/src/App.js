import React, { Fragment } from 'react';

import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';
import LanPage from './pages/lanPage/lanPage.component';
import infoPage from './pages/infoPage/infoPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import SettingPage from './pages/settingPage/settingPage.component.jsx'
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/lan" exact component={LanPage} />
          <Route path="/info" exact component={infoPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/setting" exact component={SettingPage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
