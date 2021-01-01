import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import './data-collected.styles.css';

export default function DataCollected({ name, data, page }) {
  return (
    <Fragment>
      <div className='container'>
        <div className={'textcontainer'}>
          <Typography
            align="center"
            noWrap
            className={page === 'about' ? 'aboutTitle' : 'title'}
          >
            {name}
          </Typography>
        </div>
        <div className="textcontainer">
          <Typography align="center" noWrap className="data">
            {data}
          </Typography>
        </div>
      </div>
    </Fragment>
  );
}
