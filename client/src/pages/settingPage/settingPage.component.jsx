import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import CardSettingPage from '../../components/card/card.component';

// this is Fade in for the Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

DialogContent.muiName = 'IconMenu';
// this is to open Dialog for SettingPage
export default function SettingPage({ open, handleClose }) {
  const handleSave = (event) => {
    event.preventDefault();
  };
  const [networkSetting, setNetworkSetting] = useState([
    {
      id: 1,
      name: 'networkInterface',
      networkInterface: '',
    },
    { id: 2, name: 'filter', filter: '' },
    { id: 3, name: 'gateway', gateWay: '' },
  ]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const index =event.target.id
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
  console.log(networkSetting);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Customize Network Setting'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please insert your Network Data:
          </DialogContentText>
          {networkSetting.map((value) => {
            return (
              <CardSettingPage
                networkSetting={value}
                handleChange={handleChange}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
