import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './info-body.styles';
import DataCollected from '../data-collected/data-collected.component';
import { ConnectionsInfo, ScannerConfiguration } from './data.js';

export default function InfoBody({ id, header, descrption }) {
  const classes = useStyles();
  //simpale collapse panel
  //datacollected its component to show only the data
  return (
    <div  id='lan-body' className={classes.root}>
      <Accordion classes={{ root: classes.paper }} defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{header}</Typography>
          <Typography className={classes.secondaryHeading}>
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
}
