import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './header.component.styles.jsx';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import RouterIcon from '@material-ui/icons/Router';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { connect } from 'react-redux';

import { resetSettingsNetwork } from '../../redux/settings/settings.actions';
import { resetSelectedNetwork } from '../../redux/selectedNetwork/network.actions';
import { resetHostDevices } from '../../redux/host/host.actions';

function Header({
  history,
  resetHostDevices,
  resetSelectedNetwork,
  resetSettingsNetwork,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    localStorage.clear();
    sessionStorage.clear();
    resetSelectedNetwork();
    resetSettingsNetwork();
    resetHostDevices();
    return history.push('/');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Monster Analyzer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Back" onClick={handleBack}>
            <ListItemIcon>
              <SettingsBackupRestoreIcon />
            </ListItemIcon>
            <ListItemText primary="Back" />
          </ListItem>
          {/* lan button */}
          <ListItem button key="Lan" onClick={() => history.push('/lan')}>
            <ListItemIcon>
              <RouterIcon />
            </ListItemIcon>
            <ListItemText primary="Host devices" />
          </ListItem>
          {/* Info button */}
          <ListItem button key="Info" onClick={() => history.push('/info')}>
            <ListItemIcon>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText primary="Network Info" />
          </ListItem>
          {/* About button */}
          <ListItem button key="About" onClick={() => history.push('/about')}>
            <ListItemIcon>
              <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  resetHostDevices: () => dispatch(resetHostDevices()),
  resetSettingsNetwork: () => dispatch(resetSettingsNetwork()),
  resetSelectedNetwork: () => dispatch(resetSelectedNetwork()),
});

export default connect(null, mapDispatchToProps)(Header);
