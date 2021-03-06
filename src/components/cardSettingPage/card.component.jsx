import React from 'react';
import { Card, CardContent, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './card.styles';



class CardSettingPage extends React.Component {
  render() {
    const { networkSetting, handleChange, classes, textError } = this.props;
    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.Cardcontent}>
          <div className={classes.nameText}>{networkSetting.name}</div>
          <TextField
            error={textError ? true : false}
            id={`${networkSetting.id}`}
            label={
              networkSetting.id === 1
                ? 'e.g: "wlan0"'
                : networkSetting.id === 2
                ? 'e.g: 192.168.1.22'
                : 'e.g : 192.168.1.1'
            }
            variant="outlined"
            onChange={handleChange}
            required
            name={networkSetting.name}
            className={
              networkSetting.name === 'Network_Interface'
                ? classes.textField
                : classes.textFieldSmall
            }
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardSettingPage);
