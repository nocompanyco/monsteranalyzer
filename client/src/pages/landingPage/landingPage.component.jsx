import React, { Fragment, useEffect, useRef } from 'react';
import useStyles from './landingPage.styles.jsx';
import Grid from '@material-ui/core/Grid';
import logo from '../../assets/logo.mp4';
import SwiperText from '../../components/swiper/swiper.component.jsx';
import Form from '../../components/form/form.component';
import Ghost from '../../assets/ghost.png';
import lottie from 'lottie-web';
import firstpageData from './firstpageData.json';
import happyTeam from './happyteam.json';
import Video from '../../components/video/video.component';

const LandingPage = () => {
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
          <Form />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LandingPage;
