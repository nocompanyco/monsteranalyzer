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

export default function InfoBody() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        onChange={handleChange('panel1')}
        classes={{ root: classes.paper }}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Connection Info</Typography>
          <Typography className={classes.secondaryHeading}>
            Your Network Connection Informations
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summery}>
          {ConnectionsInfo.map((item, index) => (
            <DataCollected key={item.id} name={item.name} data={item.data} />
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={handleChange('panel2')}
        classes={{
          root: classes.paper,
        }}
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Scanner configuration
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Detialed Scanner confirgration
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.summery}>
          {ScannerConfiguration.map((item) => (
            <DataCollected key={item.id} name={item.name} data={item.data} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
