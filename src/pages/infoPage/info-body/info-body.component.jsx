import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './info-body.styles';
import DataCollected from '../../../components/data-collected/data-collected.component';
import { ConnectionsInfo, ScannerConfiguration } from './data.js';
import { connect } from 'react-redux';
import { setGatwayIP } from '../../../redux/networkInterface/networkInterface.actions';
const { ipcRenderer } = window.require('electron');

const InfoBody = ({
  id,
  header,
  descrption,
  networkInterface,
  network,
  setGatwayIP,
  gatewayIP,
}) => {
  const classes = useStyles();
  //simpale collapse panel
  //datacollected its component to show only the data
  if (!network) network = sessionStorage.getItem('selectedOption');

  let selectednetwork = network.split('-')[0];

  useEffect(() => {
    setGatwayIP(ipcRenderer.sendSync('GET_GATEWAY_IP', 'ping'));
  }, [setGatwayIP]);

  if (networkInterface.hasOwnProperty(selectednetwork)) {
    let info = networkInterface[selectednetwork][0];
    console.log('infoooo', info.address);
    ConnectionsInfo[1].data = info.address;
    ConnectionsInfo[2].data = info.family;
    ConnectionsInfo[3].data = gatewayIP;
    ConnectionsInfo[4].data = info.netmask;

    ScannerConfiguration[0].data = info.cidr;
    ScannerConfiguration[1].data = info.mac;
    ScannerConfiguration[2].data = gatewayIP;
    ScannerConfiguration[3].data = gatewayIP;

  }

  ConnectionsInfo[0].data = selectednetwork;

  return (
    <div className={classes.root}>
      <Accordion
        classes={{ root: classes.paper }}
        defaultExpanded={true}
        disabled
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{header}</Typography>
          <Typography
            className={
              id === 2
                ? classes.secondaryHeadingSmall
                : classes.secondaryHeading
            }
          >
            {descrption}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summery}>
          {id === 1
            ? ConnectionsInfo.map((item, index) => (
                <DataCollected
                  key={item.id}
                  name={item.name}
                  data={item.data}
                />
              ))
            : ScannerConfiguration.map((item) => (
                <DataCollected
                  key={item.id}
                  name={item.name}
                  data={item.data}
                />
              ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setGatwayIP: (gatewayIP) => dispatch(setGatwayIP(gatewayIP)),
});
const mapStateToProps = ({ networkInterface, network }) => ({
  networkInterface: networkInterface.networkInterface,
  network: network.selectedNetwork,
  gatewayIP: networkInterface.gatewayIP,
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBody);
