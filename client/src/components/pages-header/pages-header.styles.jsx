import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 122,
    color: '#7C7C7D',
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&.active': {
      color: '#3BB7E3',
    },
  },
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#DDDFD4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginRight: 63,
    color: '#7C7C7D',
  },
}));

export default useStyles;
