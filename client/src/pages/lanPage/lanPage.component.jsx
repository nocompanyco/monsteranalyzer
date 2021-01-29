import React, { useState, useEffect } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import LanBody from '../../components/lan-body/lan-body.component';
import './lanPage.styles.css';
import Loader from '../../components/loader/loader.component';
import { useAlert } from 'react-alert';

const { ipcRenderer } = window.require('electron');

require('events').EventEmitter.prototype._maxListeners = 120;
require('events').defaultMaxListeners = 100;

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

  // toggle between the sart and the stop btn
  const [scanStop, setScanStop] = useState(false);

  useEffect(() => {
    if (scanStop) {
      for (const channel of ['STARTSCAN-GET-HOSTS'])
        ipcRenderer.removeAllListeners(channel);
      return alert.show('operation has stopped');
    }

    const timer = setInterval(() => {
      // send request to get the hosts devices from gethostsdevices function in electron

      ipcRenderer.send('STARTSCAN-GET-HOSTS', {
        network: JSON.stringify(data),
      });
      ipcRenderer.on('STARTSCAN-GET-HOSTS-REPLY', (event, hostsDevices) => {
        if (hostsDevices.length === 0) {
          sessionStorage.removeItem('hostsDevices');
          return alert.show(
            'there is no hosts connected at your local network at this moment'
          );
        }
        sessionStorage.setItem('hostsDevices', JSON.stringify(hostsDevices));
        setState(hostsDevices);
        setisLoading(false);
      });
      for (const channel of ['STARTSCAN-GET-HOSTS'])
        ipcRenderer.removeAllListeners(channel);
    }, 5000);

    return () => clearInterval(timer);
  }, [scanStop]);

  const onhandleStop = (e) => {
    setScanStop((scanStop) => !scanStop);
    e.preventDefault();
  };

  let [device, ourip] = data.split('-');

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <Header history={history} />
      <LanBody
        data={state}
        ipAdress={ourip}
        onhandleStop={onhandleStop}
        scanStop={scanStop}
      />
    </div>
  );
}
