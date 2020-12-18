import React, { Fragment } from 'react';
import useStyles from './landingPage.styles.jsx';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.png';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import Ghost from '../../assets/ghost.png';

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          className={classes.section1}
          justify="center"
          alignItems="center"
        >
          <img className={classes.logo} src={logo} alt="logo" />
        </Grid>
        <Grid container xs={12} className={classes.section2} direction="row">
          <Grid item container xs={7} alignItems='start' className={classes.form}>
            <SwiperText />
            <Form />
          </Grid>
          <Grid item container xs={2}>
            <img src={Ghost} alt="ghost" style={{ width: 320 }} />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
