import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

// cusomize the alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function MultiAlert({
  openAlert,
  handleAlertClose,
  severity,
  message,
}) {
  return (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={handleAlertClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleAlertClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
