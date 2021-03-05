import React, { useState, useEffect } from 'react';
import LanBody from './lan-body/lan-body.component';
import './lanPage.styles.css';
import Loader from '../../components/loader/loader.component';
import { useAlert } from 'react-alert';
import { connect } from 'react-redux';
import { setHostDevices } from '../../redux/host/host.actions';

const { ipcRenderer } = window.require('electron');

const LanPage = ({ history, setHostDevices }) => {
  //alert for no connections
  const alert = useAlert();

  // get the network data of interface and ipaddress
  let data;

  // check if the user selected or inserted the network option
  const selected = sessionStorage.getItem('selected');

  if (selected) {
    // get the netowrk interface selected by the user
    data = sessionStorage.getItem('selectedOption');
  } else {
    // get the network interface inserted by the user
    data = sessionStorage.getItem('InsertedOption');
  }

  //loading for getting the hosts name
  const [isLoading, setisLoading] = useState(true);

  // toggle between the sart and the stop btn
  const [scanStop, setScanStop] = useState(false);

  const getHostsAPI = () => {
    ipcRenderer.send('STARTSCAN-GET-HOSTS', {
      network: JSON.stringify(data),
    });
  };

  useEffect(() => {
    if (scanStop) {
      for (const channel of ['STARTSCAN-GET-HOSTS'])
        ipcRenderer.removeAllListeners(channel);
      return alert.show('operation has stopped');
    }
    // call it once
    getHostsAPI();
    // call it after each 5 sec
    const timer = setInterval(getHostsAPI, 5000);

    // get the hosts from the electron function
    ipcRenderer.on('STARTSCAN-GET-HOSTS-REPLY', (event, hostsDevices) => {
      if (hostsDevices.length === 0) {
        sessionStorage.removeItem('hostsDevices');
        return alert.show(
          'there is no hosts connected at your local network at this moment'
        );
      }
      sessionStorage.setItem('hostsDevices', JSON.stringify(hostsDevices));
      setHostDevices(hostsDevices);
      setisLoading(false);
    });
    for (const channel of ['STARTSCAN-GET-HOSTS'])
      ipcRenderer.removeAllListeners(channel);
    return () => clearInterval(timer);
  }, [scanStop]);

  const onhandleStop = (e) => {
    setScanStop((scanStop) => !scanStop);
    e.preventDefault();
  };

  //click on the host device for more detials
  const handleHostDevice = (index, device, event) => {
    console.log('hostadrees', index, event, device);
    history.push({
      pathname: `/hostdevice/${index}`,
      state: device,
    });
  };

  // get our device name and ip of the current device
  let device, ourip;
  if (data !== undefined && data !== null) {
    [device, ourip] = data.split('-');
  }

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <LanBody
        ipAdress={ourip}
        onhandleStop={onhandleStop}
        scanStop={scanStop}
        handleHostDevice={handleHostDevice}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setHostDevices: (host) => dispatch(setHostDevices(host)),
});

export default connect(null, mapDispatchToProps)(LanPage);
