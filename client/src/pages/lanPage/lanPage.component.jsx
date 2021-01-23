import React, { useState, useEffect } from 'react';
import Header from '../../components/pages-header/pages-header.component';
import LanBody from '../../components/lan-body/lan-body.component';
import './lanPage.styles.css';
import Loader from '../../components/loader/loader.component';

const { ipcRenderer } = window.require('electron');

export default function LanPage(props) {
  const { history } = props;

  // get the netowrk interface selected by the user
  const data = sessionStorage.getItem('selectedOption');


  //loading for getting the hosts name
  const [isLoading, setisLoading] = useState(true);

  // state that containes all the host devices
  const [state, setState] = useState([]);

  useEffect(() => {
    ipcRenderer.on('STARTBTN-CLICKED-Reply', (event, arg) => {
      if (!arg)
        return console.log('didnt get the host devices from the nettools scan');
      console.log('devices on the host ', arg);
      setState(arg);
      setisLoading(false);
    });
  }, [state]);

  let [device, ourip] = data.split('-');

  return (
    <div id="lanPage" className="lanConatiner">
      <Loader isLoading={isLoading} />
      <Header history={history} />
      <LanBody data={state} ipAdress={ourip} />
    </div>
  );
}
