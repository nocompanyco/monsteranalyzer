import React from 'react';
import { Typography } from '@material-ui/core';
import './cardLan.styles.css';
const cardLan = ({ hostAddress, hostName }) => {
  return (
    <div className="card">
      <Typography style={{ color: '#32507E', marginRight: 173 }}>
        {hostName === '?' ? 'Without a name' : hostName}
      </Typography>
      <Typography style={{ marginRight: 31 }}>{hostAddress}</Typography>
    </div>
  );
};

export default cardLan;
