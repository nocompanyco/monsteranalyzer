import React, { Fragment, useEffect, useState } from 'react';
import useStyles from './landingPage.styles.jsx';
import { Grid } from '@material-ui/core';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import MultiAlert from '../../components/success-alert/success-alert.component';
import Video from '../../components/video/video.component';
import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/selectedNetwork/network.actions';
import { setSettingsNetwork } from '../../redux/settings/settings.actions';

const { ipcRenderer } = window.require('electron');

const LandingPage = (props) => {
  const classes = useStyles();

  // the selection option that the user clicked of the main page from redux and the hidden from redux
  const {
    network,
    hidden,
    toggleHidden,
    setSettingsNetwork,
    networkSetting,
  } = props;

  // for getting the info from settingPage
  useEffect(() => {
    ipcRenderer.on('NetWork-Setting-Values', (event, arg) => {
      if (!arg) {
        setOpenAlert(true);
        setseverity('error');
        setMessage('please enter the network information again');
      }
      setOpenAlert(true);
      setseverity('success');
      setMessage('network information inserted correctly');
      setSettingsNetwork(arg.networkSetting);
      toggleHidden(arg.hidden);
    });
  });

  // click of the cutomize setting btn to open dialog box
  const handleClick = (event) => {
    event.preventDefault();
    ipcRenderer.send('SETTINGBTN-CILICKED', 'Clicked');
  };

  // for sucess alert after save btn
  //alert for multialert
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setseverity] = useState('success');
  const [message, setMessage] = useState('');

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  // start button on the main page
  const handleStart = (event) => {
    event.preventDefault();
    console.log(network, 'networklength', networkSetting.length);
    if (!network && networkSetting.length === 0) {
      setseverity('error');
      setMessage('Please select/insert the options before your start!');
      return setOpenAlert(true);
    } else {
      if (network) {
        console.log('no network');
        sessionStorage.setItem('selectedOption', network);
        sessionStorage.setItem('selected', true);
        return props.history.push({
          pathname: '/lan',
        });
      } else if (networkSetting.length !== 0) {
        console.log('not selected here');
        let networkName = networkSetting[0].data;
        let ourip = networkSetting[1].data;
        let networkInserted = [networkName, ourip].join('-');
        sessionStorage.setItem('InsertedOption', networkInserted);
        sessionStorage.selected ='';
        return props.history.push({
          pathname: '/lan',
        });
      }
    }
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
            handleStart={handleStart}
            props={props}
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

const mapStateToProps = ({ network, settings }) => ({
  network: network.selectedNetwork,
  hidden: network.hidden,
  networkSetting: settings.networkSetting,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: (hidden) => dispatch(toggleHidden(hidden)),
  setSettingsNetwork: (settingsNetwork) =>
    dispatch(setSettingsNetwork(settingsNetwork)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
