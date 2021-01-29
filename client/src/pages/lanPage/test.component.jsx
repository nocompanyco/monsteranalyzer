import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import LanBody from '../../components/lan-body/lan-body.component';
import './lanPage.styles.css';
import Loader from '../../components/loader/loader.component';
import { useAlert } from 'react-alert';

const { ipcRenderer } = window.require('electron');

export default function LanPage(props) {
  const { history } = props;

  //alert for no connections
  const alert = useAlert();

  // get the netowrk interface selected by the user
  const data = sessionStorage.getItem('selectedOption');

  //loading for getting the hosts name
  const [isLoading, setisLoading] = useState(true);

  // state that containes all the host devices
  const [state, setState] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!scanEnabled) return;
      // send request to get the hosts devices from gethostsdevices function in electron
      ipcRenderer.send('STARTSCAN-GET-HOSTS', {
        network: JSON.stringify(data),
      });
      ipcRenderer.on('STARTSCAN-GET-HOSTS-REPLY', (event, hostsDevices) => {
        console.log('STARTSCAN-GET-HOSTS-REPLY', hostsDevices);
        console.log('hostdevices from the backend', hostsDevices);
        if (hostsDevices.length === 0) {
          console.log(sessionStorage.getItem('hostsDevices'));
          sessionStorage.removeItem('hostsDevices');
          return alert.show(
            'there is no hosts connected at your local network at this moment'
          );
        }
        sessionStorage.setItem('hostsDevices', JSON.stringify(hostsDevices));
        console.log('inside the timer hostdecises: ', hostsDevices);
        setState(hostsDevices);
        setisLoading(false);
      });
      for (const channel of ['STARTSCAN-GET-HOSTS'])
        ipcRenderer.removeAllListeners(channel);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  const onhandleStop = (e) => {
    console.log('clicked');
    e.preventDefault();
  };

  let [device, ourip] = data.split('-');

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <Header history={history} />
      <LanBody data={state} ipAdress={ourip} onhandleStop={onhandleStop} />
    </div>
  );
}
