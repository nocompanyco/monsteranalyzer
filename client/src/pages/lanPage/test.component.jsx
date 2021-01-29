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

  const getHosts = (hostsDevices) => {
    console.log('inside the getHosts');
    let hostDevicesnew = [];
    hostDevicesnew.concat(hostsDevices);
    console.log('the new devices', hostDevicesnew);
    if (hostDevicesnew.length === 0) {
      return alert.show(
        'there is no hosts connected at your local network at this moment'
      );
    }
    // sessionStorage.setItem('hostsDevices', JSON.stringify(hostsDevices));
    setState(...state, hostDevicesnew);
    setisLoading(false);
    for (const channel of ['STARTSCAN-GET-HOSTS'])
      ipcRenderer.removeAllListeners(channel);
  };

  useEffect(() => {
    // call this function after each 5 seconds

    // send request to get the hosts devices from gethostsdevices function in electron
    const hostsDevices = ipcRenderer.sendSync('STARTSCAN-GET-HOSTS', {
      network: JSON.stringify(data),
    });
    console.log('after the hostsDevices', hostsDevices);
    getHosts(hostsDevices);
  }, []);

  const onhandleStop = (e) => {
    console.log('clicked');
    e.preventDefault();
  };

  let [device, ourip] = data.split('-');

  console.log('state of hostDevices', state);

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <Header history={history} />
      <LanBody data={state} ipAdress={ourip} onhandleStop={onhandleStop} />
    </div>
  );
}
