import React from 'react';
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
export default function SettingPage({
  open,
  handleClose,
  networkSetting,
  handleChange,
  error,
  handleSave,
}) {
  console.log('networking', networkSetting);
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
          {networkSetting.map((value, index) => {
            return (
              <CardSettingPage
                key={index}
                networkSetting={value}
                handleChange={handleChange}
                textError={error}
              />
            );
          })}
          <DialogActions classes={{ root: 'dialogAction' }}>
            <Button
              onClick={handleSave}
              variant="contained"
              classes={{ root: 'saveBtn' }}
            >
              Save Changes
            </Button>
          </DialogActions>
        </DialogContent>
        <div className="empty"></div>
      </Dialog>
    </div>
  );
}
