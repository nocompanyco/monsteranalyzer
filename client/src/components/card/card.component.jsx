import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

class CardSettingPage extends React.Component {
  render() {
    const { networkSetting, handleChange } = this.props;
    console.log(networkSetting);
    return (
      <Card>
        <CardContent>
          {networkSetting.name}
          <TextField
            id={networkSetting.name}
            label={networkSetting.name}
            variant="outlined"
            onChange={handleChange}
            name={networkSetting.name}
          />
        </CardContent>
      </Card>
    );
  }
}

export default CardSettingPage;
