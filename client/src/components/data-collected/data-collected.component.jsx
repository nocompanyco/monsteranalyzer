import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import './data-collected.styles.css';

export default function DataCollected({ name, data }) {
  return (
    <Fragment>
      <div className="container">
        <div className="textcontainer">
          <Typography noWrap className='title'>{name}</Typography>
        </div>
        <div className="textcontainer">
          <Typography noWrap className='data'>{data}</Typography>
        </div>
      </div>
    </Fragment>
  );
}
