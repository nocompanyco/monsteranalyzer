import React, { useState, useEffect } from 'react';
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
    // call this function after each 5 seconds
    const timer = setInterval(() => {
      // send request to get the hosts devices from gethostsdevices function in electron
      let hostsDevices = ipcRenderer.sendSync('STARTSCAN-GET-HOSTS', {
        network: JSON.stringify(data),
      });
      if (!hostsDevices)
        return alert.show(
          'there is no hosts connected at your local network at this moment'
        );
      sessionStorage.setItem('hostsDevices', JSON.stringify(hostsDevices));
      console.log('inside the timer ', hostsDevices);
      setState(hostsDevices);
      setisLoading(false);
    }, 5000);

    for (const channel of ['STARTSCAN-GET-HOSTS'])
      ipcRenderer.removeAllListeners(channel);

    return () => clearInterval(timer);
  }, []);

  let [device, ourip] = data.split('-');

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <Header history={history} />
      <LanBody data={state} ipAdress={ourip} />
    </div>
  );
}
