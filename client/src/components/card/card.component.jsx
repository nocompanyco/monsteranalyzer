import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './card.styles'

class CardSettingPage extends React.Component {
  render() {
    const { networkSetting, handleChange, classes} = this.props;
    console.log(networkSetting);
    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.Cardcontent}>
          {networkSetting.name}
          <TextField
            id={networkSetting.name}
            label={'Please Enter your data here'}
            variant="outlined"
            onChange={handleChange}
            name={networkSetting.name}
            className={networkSetting.name === 'Network_Interface' ? classes.textField : classes.textFieldSmall  }
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CardSettingPage);
