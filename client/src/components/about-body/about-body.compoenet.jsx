import { Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import logo from '../../assets/logo.png';
import data from './data';
import DataCollected from '../data-collected/data-collected.component';
import './about-body.styles.css';

export default function AboutBody() {
  return (
    <Fragment>
      <div className="containerAbout">
        <div className="section1">
          <div className='logoAbout'>
            <img alt="logo" src={logo} />
          </div>
          <div className="textContainer">
            <Typography className="logoName">Monster Analyzer</Typography>
            <Typography className="badge">Free Version</Typography>
          </div>
        </div>

        <div className="section2">

          {data.map((item) => (
            <DataCollected
              key={item.id}
              name={item.name}
              data={item.data}
              page="about"
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
