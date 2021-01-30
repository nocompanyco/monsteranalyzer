import React from 'react';
import { Typography } from '@material-ui/core';
import './cardLan.styles.css';
const cardLan = ({ hostAddress, hostName }) => {
  return (
    <div className="card">
      <div className='hostname-text'>
        <Typography style={{ color: '#32507E'}}>
          {hostName === '?' ? 'Without a name' : hostName}
        </Typography>
      </div>
      <div className='hostaddress-text'>
        <Typography>{hostAddress}</Typography>
      </div>
    </div>
  );
};

export default cardLan;
