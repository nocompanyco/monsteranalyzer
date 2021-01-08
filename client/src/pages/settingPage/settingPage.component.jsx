import React,{useState, useEffect} from 'react';
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
import SuccessAlert from '../../components/success-alert/success-alert.component';

// this is Fade in for the Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

DialogContent.muiName = 'IconMenu';

// this is to open Dialog for SettingPage
export default function SettingPage() {

  // error of the fileds and the input of the fields
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = useState(false);
  const [networkSetting, setNetworkSetting] = useState([
    {
      id: 1,
      name: 'Network_Interface',
      data: '',
    },
    { id: 2, name: 'Filter', data: '' },
    { id: 3, name: 'Gateway', data: '' },
  ]);

  useEffect(() => {
   setOpen(true)
  }, []);

  // open & close the Dialog customized Setting page
  const handleClose = () => {
    setOpen(false);
  };

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

   // for sucess alert after save btn
   const [openAlert, setOpenAlert] = React.useState(false);
   const handleAlertClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
     setOpenAlert(false);
   };



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
      <SuccessAlert openAlert={openAlert} handleAlertClose={handleAlertClose} />
    </div>
  );
}
