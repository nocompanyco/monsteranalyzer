import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, IconButton } from '@material-ui/core';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import './cardLan.styles.css';

const cardLan = ({ hostAddress, hostName, handleHostDevice }) => {
  return (
    <div className="card">
      <div className="cardContent">
        <DevicesOtherIcon fontSize="large" />
        <div className="hostContent">
          <div className="hostname-text">
            <Typography style={{ color: '#32507E' }}>
              {hostName === '?'
                ? 'Generic'
                : hostName === '_gateway'
                ? 'Gateway'
                : hostName}
            </Typography>
          </div>
          <div className="hostaddress-text">
            <Typography>{hostAddress}</Typography>
          </div>
        </div>
      </div>
      <div>
        <IconButton
          onClick={handleHostDevice}
        >
          <DoubleArrowIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default cardLan;
