import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import CardSettingPage from '../../components/card/card.component';
import './settingPage.styles.css';

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
      name: 'Network_Interface',
      Network_Interface: ''
    },
    { id: 2, name: 'Filter', Filter: '' },
    { id: 3, name: 'Gateway', Gateway: '' },
  ]);

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
        maxWidth={false}
        classes={{ paper: 'dialogContainer', root: 'dialog' }}
      >
        <DialogTitle
          id="alert-dialog-slide-title"
          classes={{ root: 'dialogTitle' }}
        >
          {'Customize Network Setting'}
        </DialogTitle>
        <DialogContent classes={{ root: 'dialogContent' }}>
          {networkSetting.map((value) => {
            return (
              <CardSettingPage
                networkSetting={value}
                handleChange={handleChange}
              />
            );
          })}
          <DialogActions classes={{root:'dialogAction'}}>
            <Button onClick={handleSave} classes={{root:'saveBtn'}}>
              Save Changes
            </Button>
          </DialogActions>
        </DialogContent>
        <div className='empty'></div>
      </Dialog>
    </div>
  );
}
