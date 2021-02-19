const styles = (theme) => ({
  cardContainer: {
    margin: 20,
    backgroundColor: '#dddfd463',
    [theme.breakpoints.down('490')]: {
      width: 407,
      height: 300,
    },
  },
  Cardcontent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('507')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '59%',
    },
  },
  textField: {
    width: 248,
  },
  textFieldSmall: {
    width: 248,
    [theme.breakpoints.down('507')]: {
      left: 'unset !important',
    },
  },
  nameText: {
    fontSize: '1em',
  },
});

export default styles;
