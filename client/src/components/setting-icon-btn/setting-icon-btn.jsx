import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3bb7e3',
    width: 50,
    height: 50,
  },
}));

export default function SettingIconBtn({ handleClick }) {
  const classes = useStyles();

  return (
    <div>
      <Fab aria-label="setting" className={classes.root}>
        <SettingsOutlinedIcon onClick={handleClick} />
      </Fab>
    </div>
  );
}
