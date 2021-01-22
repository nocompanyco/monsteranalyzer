import React, {
  Fragment,
  useEffect,
  useContext,
  useRef,
  useState,
} from 'react';
import { AppContext } from '../../App.js';
import useStyles from './landingPage.styles.jsx';
import { Grid } from '@material-ui/core';
import logo from '../../assets/logo.png';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import lottie from 'lottie-web';
import firstpageData from './firstpageData.json';

import MultiAlert from '../../components/success-alert/success-alert.component';

import Video from '../../components/video/video.component';
import axios from 'axios';

const { ipcRenderer } = window.require('electron');

const LandingPage = (props) => {
  const classes = useStyles();
  const { networkOptions } = useContext(AppContext);

  const logoContainer = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  //  this is for networking data setting page
  const [networkSetting, setNetworkSetting] = useState([]);

  const [hidden, setHidden] = useState(false);
  // the selection option that the user clicked
  const [network, setNetwork] = useState('');

  // for animation
  useEffect(() => {
    lottie.loadAnimation({
      container: logoContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: firstpageData, // the path to the animation json
    });
  }, []);

  // for getting the info from settingPage
  useEffect(() => {
    ipcRenderer.on('NetWork-Setting-Values', (event, arg) => {
      if (!arg) {
        console.log('didnt all the network information from the backend');
      }
      setOpenAlert(true);
      setNetworkSetting(arg.networkSetting);
      setHidden(arg.hidden);
    });
  });
  // click of the cutomize setting to open dialog box
  const handleClick = (event) => {
    event.preventDefault();
    ipcRenderer.send('SETTINGBTN-CILICKED', 'Clicked');
  };

  // for sucess alert after save btn
  const [openAlert, setOpenAlert] = React.useState(false);
  const [severity, setseverity] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  // start button
  const handleStart = (event) => {
    event.preventDefault();
    console.log('clicked', network);
    if (!network) {
      setseverity('error');
      setMessage('Please select on of the options before your start');
      return setOpenAlert(true);
    }
    ipcRenderer.send('STARTBTN-CLICKED', {
      // networkOptions: JSON.stringify(networkOptions),
      network: JSON.stringify(network),
    });
    ipcRenderer.on('STARTBTN-CLICKED-Reply', (event, arg) => {
      if (!arg)
        return console.log('didnt get the host devices from the nettools scan');
      console.log(arg);
    });

    // return props.history.push('/lan');
  };
  return (
    <Fragment>
      <Grid
        container
        justify="space-between"
        id="WholeConatiner"
        className={classes.container}
      >
        <Grid
          container
          item
          xs={12}
          className={hidden ? classes.section1Customized : classes.section1}
          justify="center"
          alignItems="center"
          id="section1"
        >
          {/* <div
            id="logoContainer"
            style={{ width: '34%', margin: '0 auto' }}
            ref={logoContainer}
         ></div>*/}
          <Video />
        </Grid>
        <Grid
          container
          item
          justify="space-between"
          alignItems="center"
          xs={12}
          className={classes.section2}
          direction="row"
          id="section2"
        >
          <Grid item xs={12}>
            <SwiperText hidden={hidden} />
          </Grid>
          <Form
            handleClick={handleClick}
            hidden={hidden}
            networkSetting={networkSetting}
            handleStart={handleStart}
            network={network}
            setNetwork={setNetwork}
          />
        </Grid>
      </Grid>
      <MultiAlert
        openAlert={openAlert}
        handleAlertClose={handleAlertClose}
        severity={severity}
        message={message}
      />
    </Fragment>
  );
};

export default LandingPage;
