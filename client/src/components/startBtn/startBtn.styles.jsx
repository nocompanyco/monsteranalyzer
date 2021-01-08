import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: '175px',
    height: '56px',
    backgroundColor: '#3BB7E3',
    fontSize: 22,
    [theme.breakpoints.down('624')]: {
      marginTop: 28,
    },
  },
}));

export default useStyles;
