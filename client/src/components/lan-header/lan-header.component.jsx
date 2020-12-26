import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import EventNoteIcon from '@material-ui/icons/EventNote';
import useStyles from './lan-header.styles';

export default function Header() {
  const classes = useStyles();
  const [clicked, setClicked] = useState(null);

  const handleClick = (id) => {
    return setClicked(id);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.container}>
            <IconButton
              id="one"
              edge={false}
              className={classes.menuButton}
              color="inherit"
              aria-label="back"
              component={NavLink}
              to="/"
              onClick={() => handleClick(1)}
            >
              <ArrowBackIosIcon
                className={classes.icon}
                style={{ color: clicked === 1 ? '#3BB7E3' : '#7C7C7D ' }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              className={classes.text}
            >
              Back
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="two"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="lan"
              component={NavLink}
              to="/lan"
              onClick={() => handleClick(2)}
            >
              <AccountTreeIcon
                className={classes.icon}
                style={{ color: clicked === 2 ? '#3BB7E3' : '#7C7C7D ' }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              style={{ marginRight: 24, color: '#7C7C7D' }}
            >
              Lan
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="three"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Info"
              component={NavLink}
              to="/info"
              onClick={() => handleClick(3)}
            >
              <InfoIcon
                className={classes.icon}
                style={{ color: clicked === 3 ? '#3BB7E3' : '#7C7C7D ' }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              style={{ marginRight: 24, color: '#7C7C7D' }}
            >
              Info
            </Typography>
          </div>
          <div className={classes.container}>
            <IconButton
              id="four"
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="About"
              component={NavLink}
              to="/about"
              onClick={() => handleClick(4)}
            >
              <EventNoteIcon
                className={classes.icon}
                style={{ color: clicked === 4 ? '#3BB7E3' : '#7C7C7D ' }}
              />
            </IconButton>
            <Typography
              align="center"
              variant="button"
              style={{ marginRight: 38, color: '#7C7C7D' }}
            >
              About
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
