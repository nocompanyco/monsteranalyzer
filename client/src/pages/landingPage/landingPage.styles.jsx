import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  section1: {
    backgroundColor: '#c4c4c46b',
    height: 444,
  },
  section2: {
    borderRadius: 58,
    borderTop: '12px solid #b83022',
    height: 'fit-content',
  },
  logo: {
    width: 256,
    height: 256,
  },
  form: {
    marginLeft: 248,
  },
}));

export default useStyles;
