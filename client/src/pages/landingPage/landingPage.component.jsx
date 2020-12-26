import React, { Fragment, useEffect, useRef, useState } from 'react';
import useStyles from './landingPage.styles.jsx';
import { Grid, Snackbar } from '@material-ui/core';
import logo from '../../assets/logo.png';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import lottie from 'lottie-web';
import firstpageData from './firstpageData.json';
import SettingPage from '../settingPage/settingPage.component';
import MuiAlert from '@material-ui/lab/Alert';


// cusomize the alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LandingPage = () => {
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
    setOpen(true);
  };
  // error of the fileds and the input of the fields
  const [error, setError] = useState(false);
  const [networkSetting, setNetworkSetting] = useState([
    {
      id: 1,
      name: 'Network_Interface',
      Network_Interface: '',
    },
    { id: 2, name: 'Filter', Filter: '' },
    { id: 3, name: 'Gateway', Gateway: '' },
  ]);

  const [hidden, setHidden] = useState(false);

  // when the user press SaveChanges of customized setting
  const handleSave = (event) => {
    event.preventDefault();

    if (
      [
        networkSetting[0].Network_Interface,
        networkSetting[1].Filter.length,
        networkSetting[2].Gateway.length,
      ].some((element) => element === '')
    )
      return setError(!error);
    setHidden(true);
    handleClose();
    return setOpenAlert(true);
  };

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
    const { name, value } = event.target;
    const index = event.target.id;
    setNetworkSetting((PrevNetworkSetting) => {
      const updateSetting = PrevNetworkSetting.map((item) => {
        if (index === item.name) {
          item[[name]] = value;
        }

        return item;
      });

      return updateSetting;
    });
  };
  console.log(networkSetting, error);
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
          <Form handleClick={handleClick} hidden={hidden} />
          
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
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity="success">
          The data has been saved!
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default LandingPage;
