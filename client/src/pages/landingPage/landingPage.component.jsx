import React, { Fragment, useEffect, useRef, useState } from 'react';
import useStyles from './landingPage.styles.jsx';
import { Grid } from '@material-ui/core';
import logo from '../../assets/logo.png';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import lottie from 'lottie-web';
import firstpageData from './firstpageData.json';
import SettingPage from '../settingPage/settingPage.component';

import Video from '../../components/video/video.component';
const { ipcRenderer } = window.require('electron');

const LandingPage = (props) => {
  const classes = useStyles();
  const logoContainer = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  useEffect(() => {
    lottie.loadAnimation({
      container: logoContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: firstpageData, // the path to the animation json
    });
  }, []);

  // click of the cutomize setting to open dialog box
  const handleClick = (event) => {
    event.preventDefault();
    ipcRenderer.send('SETTINGBTN-CILICKED','Clicked')
  };
  
  const [networkSetting, setNetworkSetting] = useState([
    {
      id: 1,
      name: 'Network_Interface',
      data: '',
    },
    { id: 2, name: 'Filter', data: '' },
    { id: 3, name: 'Gateway', data: '' },
  ]);

  const [hidden, setHidden] = useState(false);

  const handleStart = (event) => {
    event.preventDefault();
    console.log('clicked');
    return props.history.push('/lan');
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
          className={classes.section1}
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
            <SwiperText />
          </Grid>
          <Form
            handleClick={handleClick}
            hidden={hidden}
            networkSetting={networkSetting}
            handleStart={handleStart}
          />
         {/* <SettingPage
            open={open}
            handleClose={handleClose}
            networkSetting={networkSetting}
            handleChange={handleChange}
            error={error}
            handleSave={handleSave}
         />*/}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
