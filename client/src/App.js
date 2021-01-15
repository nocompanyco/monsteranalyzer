import React, { Fragment, useEffect } from 'react';

import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';
import LanPage from './pages/lanPage/lanPage.component';
import infoPage from './pages/infoPage/infoPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import SettingPage from './pages/settingPage/settingPage.component.jsx'
function App() {
  const { ipcRenderer } = window.require('electron'); 
  
  useEffect(() => {
    console.log('useEffect')
    ipcRenderer.sendSync('Selection-NetWork-Setting')
    ipcRenderer.on('Selection-NetWork-Setting-Reply', (event, arg) => {
      console.log('Selection-NetWork-Setting-Reply',arg)
    });
// ipcRenderer.on('Selection-NetWork-Setting', (event, arg) => {
    //       if (!arg) {
    //         console.log('didnt get the info');
    //       }
    //       console.log('react ipc ',arg)
    //       ipcRenderer.on('Selection-NetWork-Setting-Reply', (event, arg) => {
    //         console.log('Selection-NetWork-Setting-Reply',arg)
    //       });
    // }); 
  })
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
