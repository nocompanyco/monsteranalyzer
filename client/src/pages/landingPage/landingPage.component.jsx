import React, { Fragment, useEffect, useRef, useState } from 'react';
import useStyles from './landingPage.styles.jsx';
import { Grid } from '@material-ui/core';
import logo from '../../assets/logo.png';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import lottie from 'lottie-web';
import firstpageData from './firstpageData.json';
import SettingPage from '../settingPage/settingPage.component';
import SuccessAlert from '../../components/success-alert/success-alert.component';

const LandingPage = (props) => {
  const classes = useStyles();
  const logoContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: logoContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: firstpageData, // the path to the animation json
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  // open & close the Dialog customized Setting page
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    event.preventDefault();
    return setOpen(true);
  };
  // error of the fileds and the input of the fields
  const [error, setError] = useState(false);
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

  // when the user press SaveChanges of customized setting
  const handleSave = (event) => {
    event.preventDefault();

    if (
      [
        networkSetting[0].data,
        networkSetting[1].data,
        networkSetting[2].data,
      ].some((element) => element === '')
    )
      return setError(!error);
    setHidden(true);
    handleClose();
    return setOpenAlert(true);
  };

  // for sucess alert after save btn
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  // when the user fill the fields of the customized setting page
  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const index = event.target.id;
    setNetworkSetting((PrevNetworkSetting) => {
      const updateSetting = PrevNetworkSetting.map((item) => {
        if (index === item.name) {
          item.data = value;
        }

        return item;
      });

      return updateSetting;
    });
  };
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
          <div
            id="logoContainer"
            style={{ width: '34%', margin: '0 auto' }}
            ref={logoContainer}
          ></div>
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
          <SettingPage
            open={open}
            handleClose={handleClose}
            networkSetting={networkSetting}
            handleChange={handleChange}
            error={error}
            handleSave={handleSave}
          />
        </Grid>
      </Grid>
      <SuccessAlert openAlert={openAlert} handleAlertClose={handleAlertClose} />
    </Fragment>
  );
};

export default LandingPage;
