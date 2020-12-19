import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  section1: {
    backgroundColor: '#c4c4c46b',
    height: 444,
    backgroundImage:
      'url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg)',
    backgroundSize: 'cover',
    backgroundBlendMode: 'color-burn'
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
