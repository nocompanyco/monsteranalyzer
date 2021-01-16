import React, { Fragment, createContext, useEffect, useState } from 'react';

import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';
import LanPage from './pages/lanPage/lanPage.component';
import infoPage from './pages/infoPage/infoPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import SettingPage from './pages/settingPage/settingPage.component.jsx';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export var AppContext = createContext();
function App() {
  const { ipcRenderer } = window.require('electron');
  
  // getting the network setting from electron function 
  let [networkOptions, setNetworkOptions] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    ipcRenderer.sendSync('Selection-NetWork-Setting');
    ipcRenderer.on('Selection-NetWork-Setting-Reply', (event, arg) => {
      if (!arg) {
        return console.log('couldnt get the network data from the backend');
      }
      setNetworkOptions(arg);
      localStorage.setItem('networkData', JSON.stringify(arg));
      setLoading(false);
    });
  }, []);
  console.log('after the useffect', networkOptions);
  return (
    <Fragment>
      <AppContext.Provider value={{ networkOptions, loading, setLoading }}>
        <Router>
          {loading ? (
            <Loader
              type="Rings"
              color="#3BB7E3"
              height={500}
              width={500}
              visible={loading}
              secondaryColor="#C4C4C4"
              className="loader"
              timeout={5000}
            />
          ) : (
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/lan" exact component={LanPage} />
              <Route path="/info" exact component={infoPage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/setting" exact component={SettingPage} />
            </Switch>
          )}
        </Router>
      </AppContext.Provider>
    </Fragment>
  );
}

export default App;
