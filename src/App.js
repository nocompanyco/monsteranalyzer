import React, { Fragment, useEffect } from 'react';

import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.component.jsx';
import LanPage from './pages/lanPage/lanPage.component';
import infoPage from './pages/infoPage/infoPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import SettingPage from './pages/settingPage/settingPage.component.jsx';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useAlert } from 'react-alert';
import Header from './components/pages-header/header.component';
import { withRouter } from 'react-router';
import HostDevicePage from './pages/hostDevicePage/hostDevice.page';
import { connect } from 'react-redux';
import {
  setNetworkInterface,
  setIsLoading,
} from './redux/networkInterface/networkInterface.actions';

const App = ({
  location,
  history,
  setNetworkInterface,
  setIsLoading,
  isloading,
}) => {
  const { ipcRenderer } = window.require('electron');

  // getting the network setting from get network interface function from electron function
  //let [networkInterface, setNetworkInterface] = useState({});

  //let [isloading, setIsLoading] = useState(true);

  //alert for no connections
  const alert = useAlert();

  useEffect(() => {
    // communicat with electron to invoke the getnetworkinterface function
    const networkInterfaces = ipcRenderer.sendSync(
      'Fire-GetNetworkInterface-Function',
      'fired'
    );

    if (!networkInterfaces) {
      return alert.show(
        'couldnt get the network interfaces cause there is no internet connection, So please your internet connection and try again'
      );
    }

    setNetworkInterface(networkInterfaces);
    localStorage.setItem('networkData', JSON.stringify(networkInterfaces));
    setIsLoading(false);

    for (const channel of ['Fire-GetNetworkInterface-Function'])
      ipcRenderer.removeAllListeners(channel);
  }, [isloading]);

  return (
    <Fragment>
      {isloading ? (
        <Loader
          type="Rings"
          color="#3BB7E3"
          height={500}
          width={500}
          visible={isloading}
          secondaryColor="#C4C4C4"
          className="loader"
          timeout={2000} //3 secs
        />
      ) : (
        <Router>
          {location.pathname !== '/' ? <Header history={history} /> : null}
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/lan" exact component={LanPage} />
            <Route path="/info" exact component={infoPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/setting" exact component={SettingPage} />
            <Route path="/hostdevice/:id" exact component={HostDevicePage} />
          </Switch>
        </Router>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ isloading }) => ({
  isloading,
});

const mapDispacthToProps = (dispatch) => ({
  setNetworkInterface: (data) => dispatch(setNetworkInterface(data)),
  setIsLoading: (loading) => dispatch(setIsLoading(loading)),
});

export default connect(mapStateToProps, mapDispacthToProps)(withRouter(App));
